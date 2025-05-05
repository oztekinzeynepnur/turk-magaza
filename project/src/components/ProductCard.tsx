import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/urun/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
              %{product.discountPercentage} İNDİRİM
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/urun/${product.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-[#0AB3CF] line-clamp-2 transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          <button 
            onClick={() => onToggleFavorite(product.id)}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label={product.isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            <Heart size={20} fill={product.isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {product.discountPercentage > 0 ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-800">{product.price - (product.price * product.discountPercentage / 100)} TL</span>
                <span className="text-sm text-gray-500 line-through">{product.price} TL</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">{product.price} TL</span>
            )}
          </div>
          
          <span className="text-sm text-gray-500">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;