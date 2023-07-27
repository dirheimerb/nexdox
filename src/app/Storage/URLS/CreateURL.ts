'use server';
import supabase from '@/lib/supabase';
import { cookies } from 'next/headers';
import { Database } from '@/lib/db_types';

export async function createSignedURLS(
  bucketName: string,
  filePaths: string[],
  expiresIn: number,
) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUrls([...filePaths], expiresIn);
  if (error) {
    console.error(error);
  }

  return data;
}

export async function createSignedURL(
  bucketName: string,
  filePaths: string,
  expiresIn: number,
) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUrl(filePaths, expiresIn);

  if (error) {
    console.error(error);
  }

  return data;
}

export async function createUploadURL(bucketName: string, filePath: string) {
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUploadUrl(filePath);

  if (error) {
    console.error(error);
  }
  return data;
}
