import React from "react";
import { Cantidad } from "./Cantidad";
import { Botones } from "./Botones";

export const TablaVentas = () => {
  return (
    <>
      <div className=" w-[50%] rounded-[5px] m-2">
       <div className="flex justify-between p-2">
       <div className="">
          <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100">
            <option disabled selected>
              ALMACEN POZITOS
            </option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
          </select>
        </div>
        <div>
          <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100">
            <option disabled selected>
              Poziyos (La Tejona)
            </option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
          </select>
        </div>
        <div>
          <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100">
            <option disabled selected>
             Clientes Varios
            </option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
          </select>
        </div>

       </div>
       <input type="text" placeholder="Buscar/Escanear por Nombre/Código" className="border border-gray-300 focus:outline-none w-[97.5%] h-[35px] px-3 mx-2 rounded-[5px]  bg-slate-100"/>

        <table className="w-[full] ">
          <thead>
            <tr>
              <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Producto</th>
              <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Precio</th>
              <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Cantidad</th>
              <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Importe Total</th>
            </tr>
          </thead>

          <tbody className="text-center">
           
            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>
            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

            <tr>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
              <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 ">Maria</td>
            </tr>

          </tbody>
        </table>
        <div className="flex justify-around p-[10px]">
        <Cantidad descripcion="Artículos" cantidad="0,00" />
        <Cantidad descripcion="Total Bruto" cantidad="0,00" />
        <Cantidad descripcion="Propinas" cantidad="0,00" />
        </div>
        <div className="flex item-center justify-around p-[10px]">

        <Cantidad descripcion="Descuento" cantidad="0,00" />
        <Cantidad descripcion="Cupón" cantidad="0,00" />
        <Cantidad descripcion="Impuesto" cantidad="0,00" />
        <Cantidad descripcion="Envío" cantidad="0,00" />
        </div>
        <h2 className=" p-[10px] flex justify-center text-[25px] text-gray-400 bg-slate-100">TOTAL 0.00</h2>
        
      </div>
        <Botones iconText="payments" text="Efectivo" />
        <Botones iconText="save" text="Por Cobrar" />
        <Botones iconText="qr_code" text="Qr" />
        <Botones iconText="home" text="Deposito" />
        <Botones iconText="save" text="Generar Pre-Venta" />
        <Botones iconText="close" text="Cancelar" />
        <Botones iconText="schedule" text="Ventas Recientes" />
        <Botones iconText="download" text="Abonar Ventas" />
        <Botones iconText="shopping_cart" text="PreVentas" />
        <Botones iconText="save" text="Generar-Pro-Forma" />
    </>
  );
};
