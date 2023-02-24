type NavMenuType = {
  isMobileOpen: boolean;
};
const NavMenu = ({ isMobileOpen }: NavMenuType) => {
  return (
    <nav
      className={
        isMobileOpen
          ? `visible fixed inset-0 z-40 order-1 m-0 block h-full w-full bg-white opacity-100 transition delay-150 duration-500 ease-in-out md:static md:order-none md:h-auto md:w-auto md:bg-none`
          : `invisible fixed inset-0 order-1 mx-2 w-full bg-white opacity-0 transition delay-300 duration-500 ease-in-out md:visible md:static md:order-none md:block md:w-auto md:bg-none md:opacity-100`
      }
    >
      <ul
        className={
          isMobileOpen
            ? `m-0 flex h-5/6 w-full flex-col pt-16 text-center text-3xl md:flex-row md:pt-0 md:text-base`
            : `m-0 flex flex-col md:flex-row`
        }
      >
        <li className="mr-5 w-full sm:mr-8">
          <a href="/" className="inline-block cursor-pointer hover:underline">
            Home
          </a>
        </li>
        <li className="mr-5 w-full sm:mr-8">
          <a href="/shop" className="mx-auto inline-block w-full cursor-pointer hover:underline">
            Shop
          </a>
        </li>
        <li className="mr-5 w-full sm:mr-8">
          <a href="/product" className="mx-auto inline-block w-full cursor-pointer hover:underline">
            Product
          </a>
        </li>
        <li className="mr-5 w-full sm:mr-8">
          <a href="/blog" className="mx-auto inline-block w-full cursor-pointer hover:underline">
            Blog
          </a>
        </li>
        <li className="mr-0">
          <a href="/pages" className="mx-auto inline-block w-full cursor-pointer hover:underline">
            Page
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
