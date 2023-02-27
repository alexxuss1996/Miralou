import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from './modules/Footer';
import Navbar from './modules/Navbar';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="relative">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
