import ProductPrice from '@/components/features/ProductPrice';
import { getCurrentPrice } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  CartStateType,
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from '@/store/slices/cart/cartSlice';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const Cart = ({ cartItems }: Pick<CartStateType, 'cartItems'>) => {
  const dispatch = useAppDispatch();
  const { totalPrice } = useAppSelector((state) => state.cart);
  return (
    <section className="flex flex-row gap-x-5">
      <div className="flex flex-col justify-start md:w-2/3">
        <header className="flex w-full justify-items-stretch font-semibold">
          <span className="inline-block basis-96 text-center">Product</span>
          <span className="inline-block grow-[2] text-center">Price</span>
          <span className="inline-block grow-[1] text-center">Quantity</span>
          <span className="inline-block grow-[1] text-center">Subtotal</span>
        </header>
        <ul className="relative">
          {cartItems.map(
            ({
              amount,
              productId,
              productName,
              productPrice,
              productImgUrl,
              productDiscountPercent,
              isAvailable,
              popularity,
            }) => (
              <li
                key={productId}
                className="flex items-center justify-between border-t border-gray-light py-3"
              >
                <div className="flex basis-96 items-center justify-start gap-x-2">
                  <button
                    className="inline-block h-4 w-4 border-none  text-gray transition-colors duration-200 ease-in hover:text-gray-dark"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeFromCart(productId));
                    }}
                  >
                    <MdOutlineClose className="text-xl hover:text-gray-dark" />
                  </button>
                  <img
                    src={productImgUrl}
                    className="inline-block"
                    width={65}
                    height={65}
                    alt={productName}
                  />
                  <span className="text-base">{productName}</span>
                </div>
                <div className="w-36 self-center text-center">
                  <ProductPrice
                    productPrice={productPrice}
                    productDiscountPercent={productDiscountPercent}
                  />
                </div>
                <div className="flex grow-[1] items-center justify-center gap-x-1">
                  <button
                    onClick={(e) => {
                      dispatch(decreaseAmount({ productId }));
                    }}
                    disabled={amount < 1}
                    className="text-[#696969] transition-colors duration-300 ease-linear hover:text-black disabled:text-gray"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="font-sans">{amount}</span>
                  <button
                    onClick={(e) => dispatch(increaseAmount({ productId }))}
                    className="text-[#696969] transition-colors duration-300 ease-linear hover:text-black disabled:text-gray"
                    disabled={amount >= 30}
                  >
                    <FaChevronRight />
                  </button>
                </div>
                <span className="grow-[1] text-center">
                  ${(getCurrentPrice(productPrice, productDiscountPercent) * amount).toFixed(2)}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-full self-start bg-primary text-white lg:w-1/3">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-semibold">Total</span>
          <span className="text-3xl font-semibold">{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default Cart;
