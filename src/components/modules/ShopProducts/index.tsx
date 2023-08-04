import { useEffect } from 'react';
import ItemsWrapper from '@/components/features/ItemsWrapper';
import Paginator from '@/components/features/Paginator';
import ProductsItem from '@/components/features/ProductsItem';
import { useGetProductsQuery } from '@/store/services/api/miralouApi';
import { setProductsCount } from '@/store/slices/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { filterProducts, sortProducts, splitPages } from '@/helpers';
import {
  resetNumberOfPages,
  setCurrentPage,
  setNumberOfPages,
} from '@/store/slices/pagination/paginationSlice';

const ShopProducts = () => {
  const { isLoading, data: products } = useGetProductsQuery();

  const { categories, brands, priceRange, sortBy } = useAppSelector((state) => state.products);
  const { currentPage, perPage, numberOfPages } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const filtered = products && filterProducts(categories, brands, priceRange, products);
  const sortedProducts = filtered && sortProducts(filtered, sortBy);

  const paginationParams = sortedProducts && splitPages(sortedProducts, currentPage, perPage);

  const currentProducts = paginationParams?.pageSlice;
  const pagesCount = paginationParams?.pagesCount;

  const productsLength = sortedProducts && sortedProducts.length;

  if (productsLength !== undefined && Number.isInteger(productsLength)) {
    dispatch(setProductsCount(productsLength));
  }

  if (currentProducts?.length === 0 && currentPage > 1) {
    dispatch(setCurrentPage(1));
  }

  useEffect(() => {
    if (pagesCount !== undefined && Number.isInteger(pagesCount)) {
      dispatch(setNumberOfPages(pagesCount));
    }

    return () => {
      dispatch(resetNumberOfPages());
    };
  }, [dispatch, pagesCount]);

  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <section className="pb-12">
      <div className="container relative">
        <ItemsWrapper>
          {currentProducts?.length ? (
            currentProducts.map((product) => (
              <ProductsItem
                productPrice={Number(product.price)}
                productImgUrl={product.image_thumb_url}
                productDiscountPercent={Number(product.discount_percent)}
                key={product.id}
                productName={product.name}
                productId={product.id}
              />
            ))
          ) : (
            <div className="flex h-fit max-h-fit items-center justify-center">
              <p>Oops, we couldn't find anything matching your search :(</p>
            </div>
          )}
        </ItemsWrapper>
        <Paginator currentPage={currentPage} numberOfPages={numberOfPages} />
      </div>
    </section>
  );
};

export default ShopProducts;
