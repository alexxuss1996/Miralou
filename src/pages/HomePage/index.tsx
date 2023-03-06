import About from '@/modules/About';
import Categories from '@/modules/Categories';
import Hero from '@/modules/Hero';
import News from '@/modules/News';
import Partners from '@/modules/Partners';
import PopularProducts from '@/modules/PopularProducts';
import Reviews from '@/modules/Reviews';
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
      <Reviews hasImageOffset />
      <Socials />
    </>
  );
};

export default HomePage;
