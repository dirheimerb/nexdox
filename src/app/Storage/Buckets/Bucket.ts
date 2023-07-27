import supabase from '@/lib/supabase';
import { cookies } from 'next/headers';
import { Database } from '@/lib/db_types';
import { Bucket } from '@supabase/storage-js';

export async function createBucket(
  bucketName: string,
  bucketVisibility: boolean,
  allowedMimeTypes: string[],
  fileSizeLimit: number,
) {
  
  const { data, error } = await supabase.storage.createBucket(bucketName, {
    public: bucketVisibility,
    allowedMimeTypes: allowedMimeTypes,
    fileSizeLimit: fileSizeLimit,
  });
  if (error) {
    console.error(error);
  }
  return data;
}

export async function deleteBucket(id: string) {
  
  const { data, error } = await supabase.storage.deleteBucket(id);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function getBucket(id: string) {
  
  const { data, error } = await supabase.storage.getBucket(id);
  if (error) {
    console.error(error);
  }
  return data;
}

export async function listBuckets(): Promise<Bucket[] | null> {
  
  const { data, error } = await supabase.storage.listBuckets();
  if (error) {
    console.error(error);
  }
  if (data) {
    const bucketMap = data?.map((bucket) => bucket);
    console.log(bucketMap);
    return bucketMap;
  }
  return data;
}
