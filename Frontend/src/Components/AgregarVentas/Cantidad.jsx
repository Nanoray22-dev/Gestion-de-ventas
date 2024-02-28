import React from "react";

export const Cantidad = ({ descripcion, cantidad, iconText }) => {
  return (
    <>
      <div className="text-gray-500 w-[170px] h-[30px] flex ">
        <p className="px-3">{descripcion}</p>
        <span className="material-symbols-outlined px-3 hover:text-red-400 hover:transition hover:duration-700">{iconText}</span>
        <span className="text-black">{cantidad}</span>
      </div>
    </>
  );
};
