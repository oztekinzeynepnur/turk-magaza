import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Arama:', searchQuery);
    // Gerçek uygulamada arama işlevi burada yer alır
  };

  return (
    <header className="bg-[#172554] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#0AB3CF]">
            TürkMağaza
          </Link>

          {/* Mobil menü butonu */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white text-gray-800 px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#0AB3CF]"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                <Search size={18} />
              </button>
            </form>
            <div className="flex items-center space-x-4">
              <Link to="/favoriler" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <Heart size={24} />
              </Link>
              <Link to="/sepet" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <ShoppingCart size={24} />
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobil menü */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white text-gray-800 px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#0AB3CF]"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                  <Search size={18} />
                </button>
              </div>
            </form>
            <div className="flex justify-around">
              <Link 
                to="/favoriler" 
                className="flex flex-col items-center text-sm hover:text-[#0AB3CF] transition-colors duration-200"
                onClick={toggleMenu}
              >
                <Heart size={24} />
                <span>Favoriler</span>
              </Link>
              <Link 
                to="/sepet" 
                className="flex flex-col items-center text-sm hover:text-[#0AB3CF] transition-colors duration-200"
                onClick={toggleMenu}
              >
                <ShoppingCart size={24} />
                <span>Sepetim</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;