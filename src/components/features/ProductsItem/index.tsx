import OverlayLink from '@/components/shared/OverlayLink';

import ShoppingBagIcon from '@/assets/icons/vector/shopping-bag.svg';
import HeartIcon from '@/assets/icons/vector/heart.svg';
import EyeIcon from '@/assets/icons/vector/eye.svg';

type ProductType = {
  productImgUrl: string;
  productPath?: string;
  productName: string;
  popularity?: number;
  productPrice: number;
  productDiscountPercent?: number;
};

const ProductsItem = ({
  productImgUrl,
  productName,
  productPrice,
  productDiscountPercent,
}: ProductType) => {
  return (
    <li className="flex flex-col flex-wrap items-center gap-5 text-sm font-light">
      <span className="relative block max-h-[360px] md:max-w-[300px]">
        <img src={productImgUrl} alt={productName} className="max-w-full object-cover" />
        {productDiscountPercent ? (
          <span className="absolute top-5 left-0 z-10 h-6 w-20 bg-primary text-center text-base font-normal text-white">{`-${productDiscountPercent}%`}</span>
        ) : (
          ''
        )}
        <span className="group/overlay bg-transition absolute inset-0 z-20 bg-opacity-0 hover:cursor-pointer hover:bg-black-alt/40">
          <span className="mx-6 flex h-full flex-col items-end justify-center gap-3 opacity-0 group-hover/overlay:opacity-100">
            <OverlayLink src={ShoppingBagIcon} />
            <OverlayLink src={HeartIcon} />
            <OverlayLink src={EyeIcon} />
          </span>
        </span>
      </span>

      <div className="flex flex-col items-center">
        {productDiscountPercent ? (
          <span className="flex justify-center gap-2">
            <span className="text-gray-dark">{`$${(
              (productPrice / 100) *
              (100 - productDiscountPercent)
            ).toFixed(2)}`}</span>
            <span className="text-gray-dark/40 line-through">{`$${productPrice?.toFixed(2)}`}</span>
          </span>
        ) : (
          <span className="text-gray-dark">{`$${productPrice?.toFixed(2)}`}</span>
        )}
        <span className="text-gray-dark decoration-2 hover:underline">{productName}</span>
      </div>
    </li>
  );
};

export default ProductsItem;
