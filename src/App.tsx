import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Partners from './components/Partners';
import PopularProducts from './components/PopularProducts';
import Reviews from './components/Reviews';
import Socials from './components/Socials';

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
