import NotFoundPage from '@/pages/NotFoundPage';
import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from './modules/Footer';
import Navbar from './modules/Navbar';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative flex-grow">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
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
