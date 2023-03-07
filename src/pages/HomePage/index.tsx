import About from '@/modules/About';
import Categories from '@/modules/Categories';
import Hero from '@/modules/Hero';
import HomeReviews from '@/modules/HomeReviews';
import News from '@/modules/News';
import Partners from '@/modules/Partners';
import PopularProducts from '@/modules/PopularProducts';
import Socials from '@/modules/Socials';

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
