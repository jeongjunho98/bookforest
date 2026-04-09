"use client";
import Image from 'next/image';
import { useState } from 'react';

interface BookImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function BookImage({ src, alt, className, priority = false }: BookImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackSrc = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=600';

  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        priority={priority}
        onError={() => setImgSrc(fallbackSrc)}
        loading={priority ? undefined : 'lazy'}
      />
    </div>
  );
}
