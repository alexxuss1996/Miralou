import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import Counter from '@/components/shared/Counter';

const NavbarIconLinkGroup = () => {
  const { totalItems } = useAppSelector((state) => state.cart);
  return (
    <ul className="flex">
      <li className="mr-12">
        <Link to={'/search'} className="cursor-pointer">
          <FiSearch fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </Link>
      </li>
      <li className="mr-12">
        <Link to={'/wishlist'} className="cursor-pointer">
          <FiHeart fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </Link>
      </li>
      <li className="relative mr-0">
        {totalItems > 0 && <Counter value={totalItems} />}
        <Link to={'/cart'} className="cursor-pointer">
          <FiShoppingCart fontSize={'18px'} color="#222222" strokeWidth={2.5} />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarIconLinkGroup;
