import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { Product } from '../types';
import { mockProducts } from '../data/mockData';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Ürünü bul
  useEffect(() => {
    if (id) {
      const foundProduct = mockProducts.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setIsFavorite(foundProduct.isFavorite);
        
        // İlgili ürünleri bul (aynı kategoriden)
        const related = mockProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-600">Ürün yükleniyor...</p>
      </div>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const additionalImages = [
    product.imageUrl,
    "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const discountedPrice = product.discountPercentage 
    ? product.price - (product.price * product.discountPercentage / 100) 
    : product.price;

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-[#0AB3CF] hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Tüm Ürünlere Dön
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Ürün Görselleri */}
          <div className="space-y-4">
            <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={additionalImages[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
              {product.discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">
                  %{product.discountPercentage} İNDİRİM
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              {additionalImages.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImageIndex === index 
                      ? 'border-[#0AB3CF]' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Ürün Bilgileri */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                <button 
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full ${
                    isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  } transition-colors duration-200`}
                  aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
                >
                  <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < product.rating ? "currentColor" : "none"} 
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.reviewCount} değerlendirme</span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-baseline space-x-3 mb-6">
                {product.discountPercentage > 0 ? (
                  <>
                    <span className="text-3xl font-bold text-gray-800">{discountedPrice.toFixed(2)} TL</span>
                    <span className="text-lg text-gray-500 line-through">{product.price.toFixed(2)} TL</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-800">{product.price.toFixed(2)} TL</span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-medium text-gray-700">Kategori:</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{product.category}</span>
              </div>
              
              <div className="mb-6">
                <p className="font-medium text-gray-700 mb-2">Stok Durumu:</p>
                <div className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-600' : 'bg-red-600'}`}></span>
                  <span>{product.inStock ? 'Stokta var' : 'Stokta yok'}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <span className="mr-4 font-medium text-gray-700">Adet:</span>
                <div className="flex border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300 flex items-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button className="bg-[#0AB3CF] hover:bg-[#0891a7] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex-1 flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Sepete Ekle
                </button>
                <button className="border border-[#0AB3CF] text-[#0AB3CF] hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors duration-200 flex-1">
                  Şimdi Satın Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* İlgili Ürünler */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">İlgili Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link key={relatedProduct.id} to={`/urun/${relatedProduct.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-2">{relatedProduct.name}</h3>
                    <p className="text-[#0AB3CF] font-bold">{relatedProduct.price.toFixed(2)} TL</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;