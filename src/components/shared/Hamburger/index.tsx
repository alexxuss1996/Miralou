import React from 'react';
interface HamburgerProps {
  onClick?: () => void;
  className?: string;
  isOpen: boolean;
}

const Hamburger = ({ isOpen, ...props }: HamburgerProps) => {
  return (
    <div
      className="relative right-10 z-50 flex cursor-pointer items-start sm:right-0 md:hidden"
      {...props}
    >
      <div className={isOpen ? `hamburger--open space-y-2` : 'space-y-2'}>
        <span className="block h-0.5 w-[25px] bg-black transition-all duration-500 ease-in-out"></span>
        <span className="block h-0.5 w-[25px] bg-black transition-all duration-500 ease-in-out"></span>
        <span className="block h-0.5 w-[25px] bg-black transition-all duration-500 ease-in-out"></span>
      </div>
    </div>
  );
};

export default Hamburger;
