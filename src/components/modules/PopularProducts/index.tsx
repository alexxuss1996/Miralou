import ItemsWrapper from '@/components/features/ItemsWrapper';
import ProductsItem from '@/components/features/ProductsItem';
import SectionHeader from '@/components/features/SectionHeader';

import { useGetProductsQuery } from '@/store/features/productsApi';
const PopularProducts = () => {
  const { data: products } = useGetProductsQuery();

  const popularProducts =
    products &&
    [...products].sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)).slice(0, 4);

  return (
    <section className="py-12">
      <div className="container">
        <SectionHeader
          heading="Popular Product"
          paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
        />
        <ItemsWrapper>
          {popularProducts?.map((product) => (
            <ProductsItem
              key={product.id}
              productImgUrl={product.image_url}
              productDiscountPercent={parseFloat(product.discount_percent)}
              productName={product.name}
              productPrice={parseFloat(product.price)}
            />
          ))}
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default PopularProducts;