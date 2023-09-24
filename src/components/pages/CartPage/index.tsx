import React from 'react';
import { useAppSelector } from '@/hooks';
import SectionHeading from '@/components/shared/SectionHeading';
import Cart from '@/components/modules/Cart';
import EmptyCart from '@/components/modules/EmptyCart';
import SimilarProducts from '@/components/modules/SimilarProducts';

const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const firstItem = cartItems[0];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading text="Shopping Cart" />
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <>
            <Cart cartItems={cartItems} />
            <SimilarProducts category={firstItem?.category} id={firstItem?.productId} />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default CartPage;
