'use client';
import React from 'react';
import { useDropZoneContext } from '@/lib/DropZoneContext';
import { GoFileMedia } from 'react-icons/go';
import supabase from '@/lib/supabase';

export default function DropZone() {
  const [file, setFile] = React.useState<File | null>(null);
  const { state, dispatch } = useDropZoneContext();
  const handleDragEnter: React.DragEventHandler = (e) => {
    dispatch({ type: 'DRAG_IN', payload: e });
  };

  const handleDragLeave: React.DragEventHandler = (e) => {
    dispatch({ type: 'DRAG_OUT' });
  };

  const handleDragOver: React.DragEventHandler = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const handleDrop: React.DragEventHandler = (e) => {
    dispatch({ type: 'DROP', payload: e });
  };

  const hanldleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
  };

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return console.log('no file');
    let paths = '';
    const upload = async () => {
      const path = supabase.storage
        .from('public')
        .upload(`public/${file.name}`, file);
      paths = (await path).data?.path || '';
      return path;
    };
    upload();
    dispatch({ type: 'SUBMIT', payload: { file, name: file.name } });
  };

  return (
    <div
      style={{
        border: '1px dashed gray',
        padding: '20px',
        backgroundColor: state.isDragging ? 'lightgray' : 'white',
      }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!state.data && (
        <>
          <p className="text-center">Drag and drop a file here</p>
          <GoFileMedia className="mt-2 text-center mx-auto w-8 h-8" />

          <label htmlFor="file"></label>
        </>
      )}
      <input
        type="file"
        className="hidden"
        id="file"
        value={file?.name}
        onChange={hanldleFileChange}
      />
      {state.data && (
        <form onSubmit={handleInputChange}>
          <p className="text-center">File Name: {state.data}</p>
          <button
            type="submit"
            className="m-2 mb-3 border w-full bg-sky-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
