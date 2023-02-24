import ShoppingBagIcon from '../../assets/images/icons/feather/shopping-bag.svg';
import HeartIcon from '../../assets/images/icons/feather/heart.svg';
import EyeIcon from '../../assets/images/icons/feather/eye.svg';
import ProductButton from '../ProductButton';

interface IProduct {
  productImgUrl: string;
  productPath?: string;
  productName: string;
  productPrice: number;
  productDiscountPercent?: number;
}

const ProductsItem = ({
  productImgUrl,
  productName,
  productPrice,
  productDiscountPercent,
}: IProduct) => {
  return (
    <li className="flex flex-col flex-wrap items-center gap-5 text-sm font-light text-">
      <span className="block max-h-[360px] relative">
        <img src={productImgUrl} alt={productName} />
        {productDiscountPercent ? (
          <span className="absolute top-5 left-0 w-20 h-6 bg-primary z-10 text-white text-base text-center font-normal">{`${productDiscountPercent}%`}</span>
        ) : (
          ''
        )}
        <span className="absolute inset-0 z-20 bg-opacity-0 hover:bg-black-alt/40 group/overlay hover:cursor-pointer bg-transition">
          <span className="flex flex-col items-end justify-center gap-3 h-full mx-6 opacity-0 group-hover/overlay:opacity-100">
            <ProductButton src={ShoppingBagIcon} />
            <ProductButton src={HeartIcon} />
            <ProductButton src={EyeIcon} />
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
        <span className="text-gray-dark hover:underline decoration-2">{productName}</span>
      </div>
    </li>
  );
};

export default ProductsItem;
