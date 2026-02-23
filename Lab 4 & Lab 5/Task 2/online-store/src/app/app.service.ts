import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'smartphones' },
    { id: 2, name: 'laptops' },
    { id: 3, name: 'headphones' },
    { id: 4, name: 'tablets' }
  ];

  products: Product[] = [
    {
        id: 1,
        name: 'Apple iPhone 15 Pro 256GB (Black)',
        description: 'Titanium body and a powerful A17 Pro chip for fast performance. Great camera system for sharp photos and smooth 4K video.',
        price: 699990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/iphone15pro-main/640/420',
        images: [
            'https://picsum.photos/seed/iphone15pro-1/640/420',
            'https://picsum.photos/seed/iphone15pro-2/640/420',
            'https://picsum.photos/seed/iphone15pro-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
        likes: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 5G 12/256 (Black)',
        description: 'Flagship Android with a top-tier camera and premium display. Built for productivity, gaming, and long daily use.',
        price: 649990,
        rating: 4.8,
        image: 'https://picsum.photos/seed/s24ultra-main/640/420',
        images: [
            'https://picsum.photos/seed/s24ultra-1/640/420',
            'https://picsum.photos/seed/s24ultra-2/640/420',
            'https://picsum.photos/seed/s24ultra-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-podarok-116004824/',
        likes: 0,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Apple iPhone 15 Pro 256GB (Black)',
        description: 'Titanium body and a powerful A17 Pro chip for fast performance. Great camera system for sharp photos and smooth 4K video.',
        price: 699990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/iphone15pro-main/640/420',
        images: [
            'https://picsum.photos/seed/iphone15pro-1/640/420',
            'https://picsum.photos/seed/iphone15pro-2/640/420',
            'https://picsum.photos/seed/iphone15pro-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
        likes: 0,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Apple iPhone 15 Pro 256GB (Black)',
        description: 'Titanium body and a powerful A17 Pro chip for fast performance. Great camera system for sharp photos and smooth 4K video.',
        price: 699990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/iphone15pro-main/640/420',
        images: [
            'https://picsum.photos/seed/iphone15pro-1/640/420',
            'https://picsum.photos/seed/iphone15pro-2/640/420',
            'https://picsum.photos/seed/iphone15pro-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
        likes: 0,
        categoryId: 1
    },
    {
        id: 5,
        name: 'Apple iPhone 15 Pro 256GB (Black)',
        description: 'Titanium body and a powerful A17 Pro chip for fast performance. Great camera system for sharp photos and smooth 4K video.',
        price: 699990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/iphone15pro-main/640/420',
        images: [
            'https://picsum.photos/seed/iphone15pro-1/640/420',
            'https://picsum.photos/seed/iphone15pro-2/640/420',
            'https://picsum.photos/seed/iphone15pro-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
        likes: 0,
        categoryId: 1
    },
    {
        id: 6,
        name: 'Apple MacBook Air 13 (2022) 16GB / 512GB',
        description: 'Thin and light laptop for study and work with a fast SSD. Excellent battery life and a sharp, bright screen.',
        price: 799990,
        rating: 4.8,
        image: 'https://picsum.photos/seed/mba-main/640/420',
        images: [
            'https://picsum.photos/seed/mba-1/640/420',
            'https://picsum.photos/seed/mba-2/640/420',
            'https://picsum.photos/seed/mba-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-512-gb-macos-z16100143-112025576/',
        likes: 0,
        categoryId: 2
    },
    {
        id: 7,
        name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
        description: 'Powerful and affordable laptop for study and work. Features a large screen, fast SSD, and long battery life.',
        price: 379990,
        rating: 4.6,
        image: 'https://picsum.photos/seed/samsungtv-main/640/420',
        images: [
            'https://picsum.photos/seed/samsungtv-1/640/420',
            'https://picsum.photos/seed/samsungtv-2/640/420',
            'https://picsum.photos/seed/samsungtv-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=195220100',
        likes: 0,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Apple MacBook Air 13 (2022) 16GB / 512GB',
        description: 'Thin and light laptop for study and work with a fast SSD. Excellent battery life and a sharp, bright screen.',
        price: 799990,
        rating: 4.8,
        image: 'https://picsum.photos/seed/mba-main/640/420',
        images: [
            'https://picsum.photos/seed/mba-1/640/420',
            'https://picsum.photos/seed/mba-2/640/420',
            'https://picsum.photos/seed/mba-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-512-gb-macos-z16100143-112025576/',
        likes: 0,
        categoryId: 2
    },
    {
        id: 9,
        name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
        description: 'Powerful and affordable laptop for study and work. Features a large screen, fast SSD, and long battery life.',
        price: 379990,
        rating: 4.6,
        image: 'https://picsum.photos/seed/samsungtv-main/640/420',
        images: [
            'https://picsum.photos/seed/samsungtv-1/640/420',
            'https://picsum.photos/seed/samsungtv-2/640/420',
            'https://picsum.photos/seed/samsungtv-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=195220100',
        likes: 0,
        categoryId: 2
    },
    {
        id: 10,
        name: 'Apple MacBook Air 13 (2022) 16GB / 512GB',
        description: 'Thin and light laptop for study and work with a fast SSD. Excellent battery life and a sharp, bright screen.',
        price: 799990,
        rating: 4.8,
        image: 'https://picsum.photos/seed/mba-main/640/420',
        images: [
            'https://picsum.photos/seed/mba-1/640/420',
            'https://picsum.photos/seed/mba-2/640/420',
            'https://picsum.photos/seed/mba-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-512-gb-macos-z16100143-112025576/',
        likes: 0,
        categoryId: 2
    },
    {
        id: 11,
        name: 'Sony WH-1000XM5 (Silver) Headphones',
        description: 'Comfortable over-ear headphones with strong ANC and high-quality sound. Ideal for travel, office, and daily music.',
        price: 199990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/xm5-main/640/420',
        images: [
            'https://picsum.photos/seed/xm5-1/640/420',
            'https://picsum.photos/seed/xm5-2/640/420',
            'https://picsum.photos/seed/xm5-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
        likes: 0,
        categoryId: 3
    },
    {
        id: 12,
        name: 'JBL Charge 5 (White) Portable Speaker',
        description: 'Loud portable Bluetooth speaker with long battery life. Can be used as a power bank for your phone.',
        price: 79990,
        rating: 5.0,
        image: 'https://picsum.photos/seed/jblcharge5-main/640/420',
        images: [
            'https://picsum.photos/seed/jblcharge5-1/640/420',
            'https://picsum.photos/seed/jblcharge5-2/640/420',
            'https://picsum.photos/seed/jblcharge5-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-belyi-102892121/',
        likes: 0,
        categoryId: 3
    },
    {
        id: 13,
        name: 'Sony WH-1000XM5 (Silver) Headphones',
        description: 'Comfortable over-ear headphones with strong ANC and high-quality sound. Ideal for travel, office, and daily music.',
        price: 199990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/xm5-main/640/420',
        images: [
            'https://picsum.photos/seed/xm5-1/640/420',
            'https://picsum.photos/seed/xm5-2/640/420',
            'https://picsum.photos/seed/xm5-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
        likes: 0,
        categoryId: 3
    },
    {
        id: 14,
        name: 'JBL Charge 5 (White) Portable Speaker',
        description: 'Loud portable Bluetooth speaker with long battery life. Can be used as a power bank for your phone.',
        price: 79990,
        rating: 5.0,
        image: 'https://picsum.photos/seed/jblcharge5-main/640/420',
        images: [
            'https://picsum.photos/seed/jblcharge5-1/640/420',
            'https://picsum.photos/seed/jblcharge5-2/640/420',
            'https://picsum.photos/seed/jblcharge5-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-belyi-102892121/',
        likes: 0,
        categoryId: 3
    },
    {
        id: 15,
        name: 'Sony WH-1000XM5 (Silver) Headphones',
        description: 'Comfortable over-ear headphones with strong ANC and high-quality sound. Ideal for travel, office, and daily music.',
        price: 199990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/xm5-main/640/420',
        images: [
            'https://picsum.photos/seed/xm5-1/640/420',
            'https://picsum.photos/seed/xm5-2/640/420',
            'https://picsum.photos/seed/xm5-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
        likes: 0,
        categoryId: 3
    },
    {
        id: 16,
        name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
        description: 'Планшет Apple iPad с процессором A16, Wi-Fi, 11 дюймов экрана, 6 Гб оперативной памяти и 128 Гб внутреннего хранилища.',
        price: 17990,
        rating: 4.7,
        image: 'https://picsum.photos/seed/miband8-main/640/420',
        images: [
            'https://picsum.photos/seed/miband8-1/640/420',
            'https://picsum.photos/seed/miband8-2/640/420',
            'https://picsum.photos/seed/miband8-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=195220100',
        likes: 0,
        categoryId: 4
    },
    {
        id: 17,
        name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
        description: 'Планшет Xiaomi Redmi Pad 2 с 4G, 11 дюймов экрана, 8 Гб оперативной памяти и 256 Гб внутреннего хранилища.',
        price: 299990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/redmipad2-main/640/420',
        images: [
            'https://picsum.photos/seed/redmipad2-1/640/420',
            'https://picsum.photos/seed/redmipad2-2/640/420',
            'https://picsum.photos/seed/redmipad2-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=195220100',
        likes: 0,
        categoryId: 4
    },
    {
        id: 18,
        name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
        description: 'Планшет Apple iPad с процессором A16, Wi-Fi, 11 дюймов экрана, 6 Гб оперативной памяти и 128 Гб внутреннего хранилища.',
        price: 17990,
        rating: 4.7,
        image: 'https://picsum.photos/seed/miband8-main/640/420',
        images: [
            'https://picsum.photos/seed/miband8-1/640/420',
            'https://picsum.photos/seed/miband8-2/640/420',
            'https://picsum.photos/seed/miband8-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=195220100',
        likes: 0,
        categoryId: 4
    },
    {
        id: 19,
        name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
        description: 'Планшет Xiaomi Redmi Pad 2 с 4G, 11 дюймов экрана, 8 Гб оперативной памяти и 256 Гб внутреннего хранилища.',
        price: 299990,
        rating: 4.9,
        image: 'https://picsum.photos/seed/redmipad2-main/640/420',
        images: [
            'https://picsum.photos/seed/redmipad2-1/640/420',
            'https://picsum.photos/seed/redmipad2-2/640/420',
            'https://picsum.photos/seed/redmipad2-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=195220100',
        likes: 0,
        categoryId: 4
    },
    {
        id: 20,
        name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
        description: 'Планшет Apple iPad с процессором A16, Wi-Fi, 11 дюймов экрана, 6 Гб оперативной памяти и 128 Гб внутреннего хранилища.',
        price: 17990,
        rating: 4.7,
        image: 'https://picsum.photos/seed/miband8-main/640/420',
        images: [
            'https://picsum.photos/seed/miband8-1/640/420',
            'https://picsum.photos/seed/miband8-2/640/420',
            'https://picsum.photos/seed/miband8-3/640/420',
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=195220100',
        likes: 0,
        categoryId: 4
    },
  ];

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}