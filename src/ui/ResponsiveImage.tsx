import Image from 'next/image';
import React from 'react';

interface ResponsiveImageProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveImage({
  alt,
  src,
  width,
  height,
  className,
  children,
}: ResponsiveImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
    >
      {children}
    </Image>
  );
}
