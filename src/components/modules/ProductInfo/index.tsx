import React from 'react';
import { increment, decrement } from '@/store/slices/productQuantitySlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { StarRating } from '@/components/features/StarRating';
import { ProductResponseType } from '@/store/services/api/miralouApi';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type ProductInfoProps = Pick<
  ProductResponseType,
  'code' | 'name' | 'rating' | 'price' | 'description' | 'discount_percent' | 'reviews' | 'tags'
>;

const ProductInfo = ({
  name,
  rating,
  reviews,
  description,
  tags,
  code,
  discount_percent,
  price,
}: ProductInfoProps) => {
  const { productCount } = useAppSelector((state) => state.productQuantity);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3 className="mb-2 mt-6 text-[36px] font-semibold text-black">{name}</h3>
      <div className="mb-6 flex items-center gap-2">
        <StarRating rating={parseInt(rating)} />
        {reviews && (
          <span className="text-sm text-gray-alt">
            {reviews.length > 1
              ? `(${reviews.length} customer reviews)`
              : `(${reviews.length} customer review)`}
          </span>
        )}
      </div>
      <p className="mb-4 text-sm font-light text-gray-dark">{description}</p>
      <div className="mt-6 flex gap-[30px]">
        <div className="flex h-[45px] w-[300px] items-center justify-between border border-gray pl-5 pr-3">
          <span className="inline-block text-[#696969]">Quantity</span>
          <div className="flex items-center gap-1 ">
            <button
              type="button"
              className="left-angle w-4 border-none bg-[transparent] disabled:text-gray-light"
              onClick={handleDecrement}
              disabled={productCount === 0}
            >
              <FaAngleLeft className="text-[#8c8c8c]" fontSize={16} />
            </button>
            <span className="inline-block font-sans text-[#696969]">{productCount}</span>
            <button
              type="button"
              className="right-angle w-4 border-none bg-[transparent] disabled:text-gray-light"
              onClick={handleIncrement}
              disabled={productCount === 99}
            >
              <FaAngleRight className="text-[#8c8c8c]" fontSize={16} />
            </button>
          </div>
        </div>
        <button
          className="bg-transition h-[45px] border  border-[transparent] bg-primary px-8 text-sm font-light uppercase text-white hover:border-primary hover:bg-white hover:text-primary"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
export default ProductInfo;
