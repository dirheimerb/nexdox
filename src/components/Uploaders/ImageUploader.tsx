'use client';
import React, { ChangeEvent, DragEvent, useState } from 'react';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import supabase from '@/lib/supabase';
import ImagePreview from './ImagePreview';


export default function ImageUploader() {
  // Create a state variable to store the selected file
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  // This function will be called when the file input changes
  const handleImageUpload = async(event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImage(files[0]);
    } else {
        setSelectedImage(null);
    }
  };

    const handleFormSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!selectedImage) return;
      const {data, error } = await supabase
      .storage
      .from('avatars')
      .upload(`public/${selectedImage.name}`, selectedImage, {
        cacheControl: '3600',
        upsert: false,
      });
    }

    const handleDrop = async (event: DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length) {
          setSelectedImage(event.dataTransfer.files[0]);
        }
      };
    
      const handleDragOver = (event: DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = (event: DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDragging(false);
      };

  return (
    <>
        <form 
            onSubmit={handleFormSubmit} 
            className={`bg-white shadow-lg m-2 sm:rounded-xl md:col-span-2 ${dragging ? 'bg-sky-600' : ''}`} 
            onDragOver={handleDragOver} 
            onDragLeave={handleDragLeave} 
            onDrop={handleDrop}>
              <div className="sm:col-span-2 sm:mt-0">
                <div className="flex max-w-2xl justify-center rounded-lg border-none shadow-lg border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <MdOutlinePhotoSizeSelectActual className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  
                </div>
                <div className="p-2 w-full border bg-blue-600 rounded-lg shadow-lg text-center items-center justify-center hover:bg-blue-800">
                    <button type="submit" className=' cursor-pointer'>Submit</button>
                </div>
              </div>
        </form>
        <div className="p-2 w-full h-1/2 border-none bg-blue-600 rounded-lg shadow-lg text-center items-center justify-center hover:bg-blue-800">
            <ImagePreview image={selectedImage} />
        </div>
    </>
  );
}