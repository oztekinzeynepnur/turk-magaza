import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172554] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0AB3CF]">TürkMağaza</h3>
            <p className="mb-4">
              Türkiye'nin en kaliteli ürünlerini sizlerle buluşturuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#0AB3CF] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/urunler" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kategori/elektronik" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Elektronik
                </Link>
              </li>
              <li>
                <Link to="/kategori/giyim" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Giyim
                </Link>
              </li>
              <li>
                <Link to="/kategori/ev" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Ev & Yaşam
                </Link>
              </li>
              <li>
                <Link to="/kategori/kitap" className="hover:text-[#0AB3CF] transition-colors duration-200">
                  Kitap & Kırtasiye
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={20} className="mr-2 flex-shrink-0" />
                <span>+90 212 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@turkmagaza.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TürkMağaza. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;