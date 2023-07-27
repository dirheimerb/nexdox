'use server';
import supabase from '@/lib/supabase';
import { cookies } from 'next/headers';
import { Database } from '@/lib/db_types';
/**
 * @name getPublicURL
 * @date 7/10/2023 - 5:54:05 PM
 *
 * @export
 * @async
 * @param {string} publicBucket
 * @param {string} publicURL
 * @returns {Promise<{ publicUrl: string; }>}
 */
export async function getPublicURL(
  publicBucket: string,
  publicURL: string,
): Promise<{
  publicUrl: string;
}> {
  
  const { data } = supabase.storage.from(publicBucket).getPublicUrl(publicURL);
  return data;
}
/**
 * @name getPublicAsset
 * @date 7/10/2023 - 5:53:51 PM
 *
 * @export
 * @async
 * @param {string} publickBucket
 * @param {string} publicURL
 * @returns {Promise<{ publicUrl: string; }>}
 */
export async function getPublicAsset(
  publickBucket: string,
  publicURL: string,
): Promise<{ publicUrl: string }> {
  
  const { data } = supabase.storage
    .from(publickBucket)
    .getPublicUrl(publicURL, {
      transform: {
        width: 100,
        height: 100,
      },
    });
  return data;
}

/**
 * @name downloadAsset
 * @date 7/10/2023 - 5:51:01 PM
 *
 * @export
 * @async
 * @param {string} publicBucket
 * @param {string} publicURL
 * @returns {Promise<{ publicUrl: string; }>}
 */
export async function downloadAsset(
  publicBucket: string,
  publicURL: string,
): Promise<{ publicUrl: string }> {

  const { data } = supabase.storage.from(publicBucket).getPublicUrl(publicURL, {
    download: true,
  });
  return data;
}
