import React from 'react';

type ProductPriceType = { productPrice: number; productDiscountPercent?: number };

const ProductPrice = ({ productPrice, productDiscountPercent }: ProductPriceType) => {
  return (
    <>
      {productDiscountPercent ? (
        <span className="flex justify-start gap-2">
          <span className="text-gray-dark">{`$${(
            (productPrice / 100) *
            (100 - productDiscountPercent)
          ).toFixed(2)}`}</span>
          <span className="text-gray-dark/40 line-through">{`$${productPrice?.toFixed(2)}`}</span>
        </span>
      ) : (
        <span className="text-gray-dark">{`$${productPrice?.toFixed(2)}`}</span>
      )}
    </>
  );
};

export default ProductPrice;
