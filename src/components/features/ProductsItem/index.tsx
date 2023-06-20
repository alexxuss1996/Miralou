import OverlayLink from '@/components/shared/OverlayLink';

import ShoppingBagIcon from '@/assets/icons/vector/shopping-bag.svg';
import HeartIcon from '@/assets/icons/vector/heart.svg';
import EyeIcon from '@/assets/icons/vector/eye.svg';
import { Link } from 'react-router-dom';
import ProductPrice from '@/components/features/ProductPrice';

type ProductType = {
  productImgUrl: string;
  productName: string;
  popularity?: number;
  productPrice: number;
  productDiscountPercent?: number;
  productId: string;
};

const ProductsItem = ({
  productImgUrl,
  productName,
  productPrice,
  productDiscountPercent,
  productId,
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
        <ProductPrice productPrice={productPrice} productDiscountPercent={productDiscountPercent} />
        <Link
          to={`/shop/${productId}`}
          className="text-gray-dark decoration-1 underline-offset-2 hover:underline"
        >
          {productName}
        </Link>
      </div>
    </li>
  );
};

export default ProductsItem;
