import React from 'react';
import Product from './Product';
import 'tailwindcss/tailwind.css';

const products = [
  {
    image: "path/to/image1.jpg",
    title: "COMBO BRASILIT 1.83",
    description: "6mm con 3 Tirafondos",    
    code: "COMBOB1836MMT45"
  },
  {
    image: "path/to/image2.jpg",
    title: "COMBO BRASILIT 1.83",
    description: "6mm con 3 Tirafondos",    
    code: "COMBOB1836MMT45"
  },
  
];

const ProductLists = () => (
  <div className="flex flex-wrap -mx-2">
    {products.map((product, index) => (
      <Product key={index} {...product} />
    ))}
  </div>
);

export default ProductLists;