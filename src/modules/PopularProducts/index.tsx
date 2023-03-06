import ItemsWrapper from '@/components/ItemsWrapper';
import ProductsItem from '@/components/ProductsItem';
import SectionHeader from '@/shared/SectionHeader';
import chaneln5 from '@/assets/images/products-section/chanel-n5.jpg';
import lipstick from '@/assets/images/products-section/lipstick.jpg';
import oilSerum from '@/assets/images/products-section/oil-serum.jpg';
import shampoo from '@/assets/images/products-section/shampoo.jpg';

const PopularProducts = () => {
  return (
    <section className="py-12">
      <div className="container">
        <SectionHeader
          heading="Popular Product"
          paragraphText="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
        />
        <ItemsWrapper>
          <ProductsItem
            productImgUrl={chaneln5}
            productName="Parfume Chanel №5"
            productPrice={120}
          />
          <ProductsItem
            productImgUrl={lipstick}
            productName="Red Lipstick Clinique"
            productPrice={25}
          />
          <ProductsItem productImgUrl={oilSerum} productName="Face Oil Serum" productPrice={60} />
          <ProductsItem
            productImgUrl={shampoo}
            productName="Hair Strength Shampoo"
            productPrice={50}
            productDiscountPercent={20}
          />
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default PopularProducts;
