export type product = {
    id:number;
    name:string;
    category:string;
    price:number;
    piece:number;
    colors:string[];
    image:string;
}



export const headers:string[] = [
  "Image", 'Product Name', "Category", "Price", "Piece", "Available Color" , "Action"
]

export const products:product[] = [
  {
    id: 1,
    name: 'Apple Watch Series 4',
    category: 'Digital Product',
    price: 690.0,
    piece: 63,
    colors: ['Black', 'Grey', 'Pink'],
    image: '/images/apple-watch.png',
  },
  {
    id: 2,
    name: 'Microsoft Headsquare',
    category: 'Digital Product',
    price: 190.0,
    piece: 13,
    colors: ['Black', 'Pink', 'Blue', 'Gold'],
    image: '/images/microsoft-headsquare.png',
  },
  {
    id: 3,
    name: "Women's Dress",
    category: 'Fashion',
    price: 640.0,
    piece: 635,
    colors: ['Maroon', 'Light Blue', 'Dark Blue', 'Purple'],
    image: '/images/womens-dress.png',
  },
  {
    id: 4,
    name: 'Samsung A50',
    category: 'Mobile',
    price: 400.0,
    piece: 67,
    colors: ['Blue'],
    image: '/images/samsung-a50.png',
  },
  {
    id: 5,
    name: 'Camera',
    category: 'Electronic',
    price: 420.0,
    piece: 52,
    colors: ['Blue', 'Black', 'Maroon'],
    image: '/images/camera.png',
  },
  {
    id: 6,
    name: 'Sony Headphones',
    category: 'Digital Product',
    price: 250.0,
    piece: 40,
    colors: ['Black', 'White'],
    image: '/images/microsoft-headsquare.png',
  },
  {
    id: 7,
    name: 'Leather Handbag',
    category: 'Fashion',
    price: 320.0,
    piece: 120,
    colors: ['Brown', 'Black', 'Tan'],
    image: '/images/leather-handbag.png',
  },
  {
    id: 8,
    name: 'iPhone 14 Pro',
    category: 'Mobile',
    price: 999.0,
    piece: 25,
    colors: ['Black', 'Silver', 'Deep Purple'],
    image: '/images/iphone-14-pro.png',
  },
  {
    id: 9,
    name: 'Smart LED TV',
    category: 'Electronic',
    price: 850.0,
    piece: 18,
    colors: ['Black'],
    image: '/images/smart-tv.png',
  },
  {
    id: 10,
    name: 'Casual Shirt',
    category: 'Fashion',
    price: 75.0,
    piece: 300,
    colors: ['White', 'Blue', 'Grey'],
    image: '/images/casual-shirt.png',
  },
];
