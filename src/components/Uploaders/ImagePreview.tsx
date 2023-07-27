'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
type ImagePreviewProps = {
  image: File | null;
}

export default function ImagePreview({ image }: ImagePreviewProps) {
  // Store the object URL in the state
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Create an effect to update the previewUrl whenever the image prop changes
  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
    } else {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);

      // Free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  if (!previewUrl) {
    return <div>No image selected</div>
  }

  return (
    <div>
      <Image src={previewUrl} alt="Image Preview" className="object-cover border-none w-full" width={200} height={400} />
    </div>
  );
};
