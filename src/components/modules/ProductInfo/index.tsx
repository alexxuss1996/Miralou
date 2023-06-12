import React from 'react';

import { StarRating } from '@/components/features/StarRating';
import { ProductResponseType } from '@/store/services/api/productsApi';

type ProductInfoProps = Pick<
  ProductResponseType,
  'code' | 'name' | 'rating' | 'price' | 'description' | 'discount_percent'
>;

const ProductInfo = ({ name, rating }: ProductInfoProps) => {
  return (
    <>
      <h3 className="mb-4 text-3xl font-semibold text-black">{name}</h3>
      <StarRating rating={parseInt(rating)} />
    </>
  );
};
export default ProductInfo;
