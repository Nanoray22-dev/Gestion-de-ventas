import React from "react";

const Product = ({ image, title, description, code }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-1/3 h-2/5 p-4 text-center">
      <img
        src={image}
        className="w-16 h-8 object-cover mx-auto mb-1 rounded-lg"
      />
      <h3 className="text-sm font-normal mb-1">{title}</h3>
      <p className="text-gray-600 mb-1">{description}</p>
      <div className=" text-sm text-gray-600">{code}</div>
    </div>
  );
};

export default Product;
