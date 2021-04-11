import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sakib',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'Steel Casing',
        category: 'Casing',
        image: '/images/casing.jpg',
        price: 120,
        countInStock: 5,
        brand: 'ValueTop',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Thermaltech CPU Cooler',
        category: 'Cpu Fan',
        image: '/images/fan.jpg',
        price: 100,
        countInStock: 5,
        brand: 'Thermaltech',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Desktop Motherboard',
        category: 'Motherboard',
        image: '/images/motherboard.jpg',
        price: 220,
        countInStock: 5,
        brand: 'ASUS Rog',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Desktop Ram',
        category: 'Ram',
        image: '/images/ram.jpg',
        price: 78,
        countInStock: 5,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Pendrive',
        category: 'Pendrive',
        image: '/images/pendrive.jpeg',
        price: 65,
        countInStock: 5,
        brand: 'hp',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      
      {
        
        name: 'AMD Processor',
        category: 'Processor',
        image: '/images/processor.jpg',
        price: 139,
        countInStock: 5,
        brand: 'AMD',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },

      {
        
        name: 'Gigabyte 8GB 3200MHz RGB RAM',

        category: 'Desktop RAM',
        image: '/images/ramgigabyte.jpg',
        price: 4400,
        countInStock: 5,
        brand: 'Gigabyte',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        
        name: 'intel Processor',
        category: 'Processor',
        image: '/images/processor1.jpg',
        price: 139,
        countInStock: 5,
        brand: 'intel',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;