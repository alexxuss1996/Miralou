import React from 'react';
type HeadingPropsType = {
  text: string;
};
const SectionHeading = ({ text }: HeadingPropsType) => {
  return (
    <h1 className="mb-8 text-center text-2xl font-semibold md:mb-24 md:text-4xl lg:text-6xl">
      {text}
    </h1>
  );
};

export default SectionHeading;
