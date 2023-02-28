import React, { useEffect, useState } from 'react';
import NavbarIconLinkGroup from '@/components/NavbarIconLinkGroup';
import NavMenu from '@/components/NavMenu';
import Hamburger from '@/shared/Hamburger';
import Logo from '@/shared/Logo';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    if (open) {
      body!.style.overflow = 'hidden';
    } else {
      const timeout = setTimeout(() => {
        body!.style.overflowY = 'auto';
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <header className="flex h-[86px] w-full border-b-[1px] border-gray-light bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavMenu isMobileOpen={open} />
        <NavbarIconLinkGroup />
        <Hamburger onClick={() => setOpen(!open)} isOpen={open} />
      </div>
    </header>
  );
};

export default Navbar;
