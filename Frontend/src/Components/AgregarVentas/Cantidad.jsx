import React from "react";

export const Cantidad = ({ descripcion, cantidad }) => {
  return (
    <>
      <div>
        <p>{descripcion}</p>
        <span>{cantidad}</span>
      </div>
    </>
  );
};
