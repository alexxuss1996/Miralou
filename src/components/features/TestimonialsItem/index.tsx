import React from 'react';
type TestimonialType = {
  src: string;
  fallbackSrc: string;
  title: string;
  description: string;
};
const TestimonialsItem = ({ src, fallbackSrc, title, description }: TestimonialType) => {
  return (
    <li className="flex flex-col flex-wrap items-center justify-between gap-5 bg-primary px-5 py-8 text-xl font-light text-white md:w-[380px]">
      <picture>
        <source srcSet={src} type="image/svg+xml" />
        <img className="object-cover" src={fallbackSrc} alt={title} />
      </picture>
      <strong className="text-center text-2xl">{title}</strong>
      <p className="text-center text-xl font-light">{description}</p>
    </li>
  );
};

export default TestimonialsItem;
