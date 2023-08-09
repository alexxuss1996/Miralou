import React from 'react';
import { useAppSelector } from '@/hooks';
const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <>
      <h1>CartPage</h1>
      <pre>
        <code>{JSON.stringify(cartItems, null, 2)}</code>
      </pre>
    </>
  );
};

export default CartPage;
