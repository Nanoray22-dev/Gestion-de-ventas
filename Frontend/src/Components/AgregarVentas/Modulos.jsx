import React from "react";
import "tailwindcss/tailwind.css";

const Modulo = ({ text }) => (
  <div className=" bg-gray-800 flex items-center justify-center p-4 h-10 mr-2 rounded-md w-1/3">
    <p className="text-center text-white">{text}</p>
  </div>
);

const Modulos = () => (
  <div className="flex justify-center items-center my-4">
    <Modulo text="Categoría" />
    <Modulo text="Marca" />
    <Modulo text="Destacados" />
  </div>
);

export default Modulos;
