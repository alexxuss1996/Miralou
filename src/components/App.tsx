import Footer from '@/components/modules/Footer';
import Navbar from '@/components/modules/Navbar';
import AboutPage from '@/components/pages/AboutPage';
import BlogPage from '@/components/pages/BlogPage';
import HomePage from '@/components/pages/HomePage';
import NotFoundPage from '@/components/pages/NotFoundPage';
import ShopPage from '@/components/pages/ShopPage';
import { Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative flex-grow">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />x
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
