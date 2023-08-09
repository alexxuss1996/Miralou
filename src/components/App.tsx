import Footer from '@/components/modules/Footer';
import Navbar from '@/components/modules/Navbar';
import AboutPage from '@/components/pages/AboutPage';
import BlogPage from '@/components/pages/BlogPage';
import CartPage from '@/components/pages/CartPage';
import HomePage from '@/components/pages/HomePage';
import NotFoundPage from '@/components/pages/NotFoundPage';
import ProductPage from '@/components/pages/ProductPage';
import ShopPage from '@/components/pages/ShopPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative flex-grow">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
