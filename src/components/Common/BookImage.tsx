"use client";
import { useState } from 'react';

interface BookImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BookImage({ src, alt, className }: BookImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        // 이미지가 깨질 경우 숲 테마의 placeholder로 대체
        setImgSrc('https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=600');
      }}
    />
  );
}
