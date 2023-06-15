import React from 'react';

import { StarRating } from '@/components/features/StarRating';
import { ProductResponseType } from '@/store/services/api/miralouApi';

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
  return (
    <>
      <h3 className="mb-2 mt-6 text-[36px] font-semibold text-black">{name}</h3>
      <div className="mb-6 flex items-center gap-2">
        <StarRating rating={parseInt(rating)} />
        {reviews && (
          <span className="text-[#717171]">
            {reviews.length > 1
              ? `(${reviews.length} customer reviews)`
              : `(${reviews.length} customer review)`}
          </span>
        )}
      </div>
      <p className="text-sm font-light">{description}</p>
    </>
  );
};
export default ProductInfo;
