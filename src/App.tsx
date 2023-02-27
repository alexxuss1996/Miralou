import About from './modules/About';
import Categories from './modules/Categories';
import Footer from './modules/Footer';
import Hero from './modules/Hero';
import Navbar from './modules/Navbar';
import News from './modules/News';
import Partners from './modules/Partners';
import PopularProducts from './modules/PopularProducts';
import Reviews from './modules/Reviews';
import Socials from './modules/Socials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="relative">
        <Hero />
        <Partners />
        <Categories />
        <PopularProducts />
        <About />
        <News />
        <Reviews />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
