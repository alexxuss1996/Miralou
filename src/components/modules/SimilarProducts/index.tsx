import ItemsWrapper from '@/components/features/ItemsWrapper';
import ProductsItem from '@/components/features/ProductsItem';
import SectionHeader from '@/components/features/SectionHeader';

import { useGetProductsQuery } from '@/store/services/api/miralouApi';

type SimilarProductsProps = {
  id: string;
  category: string;
};
const SimilarProducts = ({ id, category }: SimilarProductsProps) => {
  const { data: products } = useGetProductsQuery();

  const similarProducts =
    products &&
    products.filter((product) => product.category === category && product.id !== id).slice(0, 4);

  return (
    <section className="py-12">
      <div className="container">
        <SectionHeader
          heading="Similar Products"
          paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
        />
        <ItemsWrapper>
          {similarProducts?.map((product) => (
            <ProductsItem
              key={product.id}
              productImgUrl={product.image_thumb_url}
              productDiscountPercent={parseFloat(product.discount_percent)}
              productName={product.name}
              productPrice={parseFloat(product.price)}
              productId={product.id}
            />
          ))}
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default SimilarProducts;
