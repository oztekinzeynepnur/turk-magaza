import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Search } from 'lucide-react';
import { Product } from '../types';
import { mockProducts } from '../data/mockData';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Tüm kategorileri çıkar
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));

  // Favorileri değiştir
  const handleToggleFavorite = (id: number) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, isFavorite: !product.isFavorite } 
        : product
    ));
  };

  // Filtreleme ve arama
  useEffect(() => {
    let result = products;
    
    // Kategori filtresi
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Arama filtresi
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery]);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#172554] to-[#0f172a] text-white py-12 px-4 mb-8 rounded-lg shadow-md">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Türkiye'nin En İyi Ürünleri Burada</h1>
          <p className="text-lg mb-8">Kaliteli ürünler, uygun fiyatlar ve hızlı teslimat garantisi</p>
          
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Ne aramıştınız?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0AB3CF]"
            />
            <button className="absolute right-4 top-3 text-gray-500">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onToggleFavorite={handleToggleFavorite} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Aramanızla eşleşen ürün bulunamadı.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
            className="mt-4 bg-[#0AB3CF] text-white px-4 py-2 rounded-md hover:bg-[#0891a7] transition-colors duration-200"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;