import NavbarIconLinkGroup from '@/components/features/NavbarIconLinkGroup';
import NavMenu from '@/components/features/NavMenu';
import Hamburger from '@/components/shared/Hamburger';
import Logo from '@/components/shared/Logo';
import { useEffect, useState } from 'react';

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

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <header className="flex h-[86px] w-full border-b-[1px] border-gray-light bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavMenu isMobileOpen={open} closeMobileMenu={closeMobileMenu} />
        <NavbarIconLinkGroup />
        <Hamburger onClick={() => setOpen(!open)} isOpen={open} />
      </div>
    </header>
  );
};

export default Navbar;
