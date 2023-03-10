import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';

const NavbarIconLinkGroup = () => {
  return (
    <ul className="flex">
      <li className="mr-12">
        <a href="/search" className="cursor-pointer">
          <FiSearch fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </a>
      </li>
      <li className="mr-12">
        <a href="/wishlist" className="cursor-pointer">
          <FiHeart fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </a>
      </li>
      <li className="mr-0">
        <a href="/cart" className="cursor-pointer">
          <FiShoppingCart fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </a>
      </li>
    </ul>
  );
};

export default NavbarIconLinkGroup;
