import React from "react";
import { Botones } from "../AgregarVentas/Botones";
import TablaCompras from "./TablaCompras";

export const TablaListarCompras = () => {
  return (
    <>
      <div className="w-[85%] relative">
        <div className="m-7">
          <Botones iconText="add" text="Añadir Ventas" />
          <Botones iconText="select_window" text="Ventas de Importación" />
        </div>
        <div className="flex justify-center gap-6 items-center">
          <label htmlFor="">
            <strong>Elige una Fecha</strong>
          </label>
          <input
            type="date"
            className="border border-gray-300 focus:outline-none w-[170px] h-[35px] px-3 mx-2 rounded-[5px]  bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 hover:placeholder:text-white"
          />
          <p>
            <strong>A</strong>
          </p>
          <input
            type="date"
            className="border border-gray-300 focus:outline-none w-[170px] h-[35px] px-3 mx-2 rounded-[5px]  bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 hover:placeholder:text-white"
          />
        </div>
        <TablaCompras />
      </div>
    </>
  );
};
