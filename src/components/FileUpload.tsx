'use client';
import React from 'react';
import supabase from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { GoFileMedia } from 'react-icons/go';
import Image from 'next/image';

export default function FileUpload() {
  const { user } = useAuth();
  const userId = user?.id;
  const [file, setFile] = React.useState<File | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const bgRef = React.useRef<HTMLDivElement>(null);


  const hanldleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  async function createSignedUrl() {
    if (!file) return console.log('no file');
    const upload = async () => {
      const { data, error } = await supabase.storage
        .from('public')
        .createSignedUploadUrl(`${userId}/${file.name}`);
      if (error) throw error;
      if (data) return data;
    };
    return upload();
  }

  const handleInputChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file && !selectedImage) return;
    if (!file) return console.log('no file');
    if (file) {
      const tokenUrl = await createSignedUrl();
      if (!tokenUrl) return console.log('no token url');
      const { signedUrl, token, path } = tokenUrl;
      console.log('signedUrl', signedUrl);
      const upload = async () => {
        const { data, error } = await supabase.storage
          .from('public')
          .uploadToSignedUrl(path, token, file);
        if (error) throw error;
        if (data) return data;
      };

      const data = await upload();
      if (!data) return console.log('no data');
      return data;
    } else if (selectedImage) {
      const tokenUrl = await createSignedUrl();
      if (!tokenUrl) return console.log('no token url');
      const { signedUrl, token, path } = tokenUrl;
      console.log('signedUrl', signedUrl);
      const upload = async () => {
        const { data, error } = await supabase.storage
          .from('public')
          .uploadToSignedUrl(path, token, selectedImage);
        if (error) throw error;
        if (data) return data;
      };

      const data = await upload();
      if (!data) return console.log('no data');
      return data;
    }
    setFile(null);
    setPreview(null);
  };

  const handleDragLeave: React.DragEventHandler = (e) => {
    e.preventDefault();
    bgRef.current?.classList.remove('bg-gray-100');
  };

  const handleDragEnter: React.DragEventHandler = (e) => {
    e.preventDefault();
    bgRef.current?.classList.add('bg-gray-100');
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length) {
      setFile(files[0]);
      setSelectedImage(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    }
  };

  return (
    <form onSubmit={handleInputChange}>
      <div className="col-span-full ">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Upload Photos
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div
            onDragEnter={handleDragEnter}
            onDragOver={onDragOver}
            onDragLeave={handleDragLeave}
            onDrop={onDrop}
            className="text-center"
            ref={bgRef}
          >
            <GoFileMedia
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={hanldleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <button
              className="border mt-2 p-2 rounded shadow bg-blue-600 text-gray-100"
              type="submit"
            >
              Submit
            </button>
          </div>
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={150}
              height={150}
              className="mb-4 w-full h-64 object-cover"
            />
          )}
        </div>
      </div>
    </form>
  );
}
