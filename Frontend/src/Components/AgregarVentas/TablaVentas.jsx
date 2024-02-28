import React from "react";
import { Cantidad } from "./Cantidad";
import { Botones } from "./Botones";

export const TablaVentas = () => {
  return (
    <>
      <div>
        <div>
          <select name="opciones">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div>
          <select name="opciones">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <div>
          <select name="opciones">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
        </div>
        <input type="text" placeholder="Buscar/Escanear por Nombre/Código" />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Grado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Juan</td>
              <td>18</td>
              <td>12º</td>
            </tr>
            <tr>
              <td>Maria</td>
              <td>17</td>
              <td>11º</td>
            </tr>
          </tbody>
        </table>

        <Cantidad descripcion="Artículos" cantidad="0,00" />
        <Cantidad descripcion="Total Bruto" cantidad="0,00" />
        <Cantidad descripcion="Propinas" cantidad="0,00" />
        <Cantidad descripcion="Descuento" cantidad="0,00" />
        <Cantidad descripcion="Cupón" cantidad="0,00" />
        <Cantidad descripcion="Impuesto" cantidad="0,00" />
        <Cantidad descripcion="Envío" cantidad="0,00" />
        <h2>TOTAL 0.00</h2>
        <Botones
        iconText="payments"
        text="Efectivo"
        />
         <Botones
        iconText="save"
        text="Por Cobrar"
        />
         <Botones
        iconText="qr_code"
        text="Qr"
        />
         <Botones
        iconText="home"
        text="Deposito"
        />
         <Botones
        iconText="save"
        text="Generar Pre-Venta"
        />
         <Botones
        iconText="close"
        text="Cancelar"
        />
        <Botones
        iconText="schedule"
        text="Ventas Recientes"
        />
         <Botones
        iconText="download"
        text="Abonar Ventas"
        />
         <Botones
        iconText="shopping_cart"
        text="PreVentas"
        />
         <Botones
        iconText="save"
        text="Generar-Pro-Forma"
        />
   
        
      </div>
    </>
  );
};
