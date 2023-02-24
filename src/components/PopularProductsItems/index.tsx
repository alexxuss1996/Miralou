import React from 'react';

type PPItems = {
  children: React.ReactNode;
};

const PopularProductsItems = ({ children }: PPItems) => {
  return (
    <ul className="mx-auto flex flex-wrap w-[55%] xl:w-full sm:w-[50%] justify-center gap-5">
      {children}
    </ul>
  );
};

export default PopularProductsItems;
