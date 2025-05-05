import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Akıllı Telefon X Pro",
    description: "Yüksek çözünürlüklü kamera, uzun pil ömrü ve güçlü işlemci ile donatılmış en yeni akıllı telefon.",
    price: 7999.99,
    imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elektronik",
    rating: 4.7,
    reviewCount: 128,
    inStock: true,
    isFavorite: false,
    discountPercentage: 5
  },
  {
    id: 2,
    name: "Kablosuz Kulaklık",
    description: "Aktif gürültü önleme teknolojisine sahip, uzun pil ömürlü kablosuz kulaklık.",
    price: 1299.99,
    imageUrl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elektronik",
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    isFavorite: false,
    discountPercentage: 0
  },
  {
    id: 3,
    name: "Deri Ceket",
    description: "Gerçek deri, modern kesim, her mevsime uygun şık ceket.",
    price: 2499.99,
    imageUrl: "https://images.pexels.com/photos/17207399/pexels-photo-17207399/free-photo-of-man-in-brown-leather-jacket-sitting-against-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Giyim",
    rating: 4.3,
    reviewCount: 62,
    inStock: true,
    isFavorite: false,
    discountPercentage: 10
  },
  {
    id: 4,
    name: "Akıllı Saat",
    description: "Fitness takibi, kalp atış hızı ölçümü ve bildirim özelliklerine sahip akıllı saat.",
    price: 1899.99,
    imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Elektronik",
    rating: 4.4,
    reviewCount: 47,
    inStock: false,
    isFavorite: false,
    discountPercentage: 0
  },
  {
    id: 5,
    name: "Yoga Matı",
    description: "Kaymaz yüzeyli, ekstra kalın ve taşıma askılı yoga matı.",
    price: 299.99,
    imageUrl: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Spor",
    rating: 4.8,
    reviewCount: 35,
    inStock: true,
    isFavorite: false,
    discountPercentage: 0
  },
  {
    id: 6,
    name: "Modern Ahşap Masa",
    description: "Dayanıklı meşe ağacından yapılmış, şık tasarımlı modern çalışma masası.",
    price: 3499.99,
    imageUrl: "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Ev",
    rating: 4.6,
    reviewCount: 28,
    inStock: true,
    isFavorite: false,
    discountPercentage: 15
  },
  {
    id: 7,
    name: "Kahve Makinesi",
    description: "Programlanabilir, çoklu demleme seçenekli otomatik kahve makinesi.",
    price: 999.99,
    imageUrl: "https://images.pexels.com/photos/6400864/pexels-photo-6400864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Ev",
    rating: 4.2,
    reviewCount: 53,
    inStock: true,
    isFavorite: false,
    discountPercentage: 0
  },
  {
    id: 8,
    name: "Klasik Tişört",
    description: "Saf pamuklu, rahat kesimli, dayanıklı ve renk solmayan klasik tişört.",
    price: 149.99,
    imageUrl: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Giyim",
    rating: 4.1,
    reviewCount: 97,
    inStock: true,
    isFavorite: false,
    discountPercentage: 0
  }
];