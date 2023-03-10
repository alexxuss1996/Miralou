import About from '@/components/modules/About';
import Categories from '@/components/modules/Categories';
import Hero from '@/components/modules/Hero';
import HomeReviews from '@/components/modules/HomeReviews';
import News from '@/components/modules/News';
import Partners from '@/components/modules/Partners';
import PopularProducts from '@/components/modules/PopularProducts';
import Socials from '@/components/modules/Socials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Categories hasHead />
      <PopularProducts />
      <About />
      <News />
      <HomeReviews />
      <Socials />
    </>
  );
};

export default HomePage;
