import supabase from '@/lib/supabase';
import { cookies } from 'next/headers';
import { Database } from '@/lib/db_types';

export async function uploadFile(bucketName: string, file: File) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(file.name, file);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function deleteFile(bucketName: string, filePath: string) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .remove([filePath]);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function moveFile(bucketName: string, from: string, to: string) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .move(from, to);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function replaceExisitingFile(
  bucketName: string,
  path: string,
  file: File,
) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .update(path, file, {
      cacheControl: '3600',
      upsert: true,
    });
  if (error) {
    console.error(error);
  }
  return data;
}

export async function downloadFile(bucketName: string, path: string) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(path);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function downloadFileWithTransform(
  bucketName: string,
  path: string,
) {
  
  const { data, error } = await supabase.storage
    .from('avatars')
    .download('folder/avatar1.png', {
      transform: {
        width: 100,
        height: 100,
        quality: 80,
      },
    });
  if (error) {
    console.error(error);
  }
  return data;
}
