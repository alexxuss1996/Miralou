import ItemsWrapper from '@/components/features/ItemsWrapper';
import ProductsItem from '@/components/features/ProductsItem';
import React from 'react';
import { useGetProductsQuery } from '@/store/features/productsApi';

const ShopProducts = () => {
  const { isLoading, data: products } = useGetProductsQuery();
  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <section className="pb-12">
      <div className="container">
        <ItemsWrapper>
          {products?.map((product) => (
            <ProductsItem
              productPrice={Number(product.price)}
              productImgUrl={product.image_url}
              productDiscountPercent={Number(product.discount_percent)}
              key={product.id}
              productName={product.name}
            />
          ))}
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default ShopProducts;
