import React from 'react';

type WrapperItems = {
  children: React.ReactNode;
};

const ItemsWrapper = ({ children }: WrapperItems) => {
  return (
    <ul className="mx-auto flex w-[55%] flex-wrap justify-center gap-5 sm:w-[50%] xl:w-full">
      {children}
    </ul>
  );
};

export default ItemsWrapper;
