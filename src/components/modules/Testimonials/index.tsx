import ItemsWrapper from '@/components/features/ItemsWrapper';
import TestimonialsItem from '@/components/features/TestimonialsItem';

import WorldwideSvg from '@/assets/icons/vector/worldwide.svg';
import WorldwidePng from '@/assets/icons/png/worldwide.png';
import SupportSvg from '@/assets/icons/vector/support.svg';
import SupportPng from '@/assets/icons/png/support.png';
import SavingShopSvg from '@/assets/icons/vector/saving-shop.svg';
import SavingShopPng from '@/assets/icons/png/saving-shop.png';

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <ItemsWrapper>
          <TestimonialsItem
            title="Shops Worldwide"
            description="Shop from anywhere in the world with our extensive global marketplace."
            src={WorldwideSvg}
            fallbackSrc={WorldwidePng}
          />
          <TestimonialsItem
            title="24/7 Support"
            description="Get support around the clock with our dedicated 24/7 customer service team."
            src={SupportSvg}
            fallbackSrc={SupportPng}
          />
          <TestimonialsItem
            title="Big Saving Shop"
            description="Save big on your favorite brands and products with our unbeatable deals."
            src={SavingShopSvg}
            fallbackSrc={SavingShopPng}
          />
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default Testimonials;
