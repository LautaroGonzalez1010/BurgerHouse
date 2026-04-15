import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar';
import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';
import FloatingCartButton from '../../components/FloatingCartButton';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Catalog searchTerm={searchTerm} />
      <Testimonials />
      <CTA />
      <Footer />
      <Cart />
      <FloatingCartButton />
    </div>
  );
};

export default HomePage;