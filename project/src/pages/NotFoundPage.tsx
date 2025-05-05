import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-9xl font-bold text-[#0AB3CF]">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-6">Sayfa Bulunamadı</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönün.
      </p>
      <Link 
        to="/"
        className="bg-[#172554] hover:bg-[#0f172a] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;