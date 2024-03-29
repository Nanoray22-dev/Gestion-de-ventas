import { useEffect, useState } from "react";
import { Cantidad } from "./Cantidad";
import  Botones  from "./Botones";

const TablaVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [totalVentas, setTotalVentas] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/ventas")
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.ventas);
        const total = data.ventas.reduce(
          (acc, venta) => acc + parseFloat(venta.importe_total),
          0
        );
        setTotalVentas(total);
      })
      .catch((error) => {
        console.error("Error al obtener las ventas:", error);
      });
  }, []);

  return (
    <>
      <div className="w-[50%] rounded-[5px]">
        <div className="flex justify-between p-2">
          <div>
            <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
              <option disabled selected>
                ALMACEN POZITOS
              </option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
          </div>
          <div>
            <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
              <option disabled selected>
                Poziyos (La Tejona)
              </option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
          </div>
          <div>
            <select className="w-[200px] h-[35px] rounded-[5px] p-1 border border-gray-300 text-gray-400 bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
              <option disabled selected>
                Clientes Varios
              </option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          placeholder="Buscar/Escanear por Nombre/Código"
          className="border border-gray-300 focus:outline-none w-[97.5%] h-[35px] px-3 mx-2 rounded-[5px]  bg-slate-100 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700 hover:placeholder:text-white"
        />
        <div className="overflow-x-auto max-h-[250px] m-3 mb-5">
          <table className="w-full p-[10px]">
            <thead className="text-gray-600 text-[18px]">
              <tr>
                <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                  Producto
                </th>
                <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                  Precio
                </th>
                <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                  Cantidad
                </th>
                <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                  Vendedor
                </th>
                <th className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                  Importe Total
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                    {venta.producto}
                  </td>
                  <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                    {venta.precio}
                  </td>
                  <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                    {venta.cantidad}
                  </td>
                  <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                    {venta.vendedor}
                  </td>
                  <td className="hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
                    {venta.importe_total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-around p-[10px] border-t-[2px]  border-b-gray-500">
          <Cantidad descripcion="Artículos" cantidad="0,00" />
          <Cantidad descripcion="Total Bruto" cantidad="0,00" />
          <Cantidad
            descripcion="Propinas"
            cantidad="0,00"
            iconText="edit_square"
          />
        </div>
        <div className="flex item-center justify-around p-[10px]">
          <Cantidad
            descripcion="Descuento"
            cantidad="0,00"
            iconText="edit_square"
          />
          <Cantidad
            descripcion="Cupón"
            cantidad="0,00"
            iconText="edit_square"
          />
          <Cantidad
            descripcion="Impuesto"
            cantidad="0,00"
            iconText="edit_square"
          />
          <Cantidad
            descripcion="Envío"
            cantidad="0,00"
            iconText="edit_square"
          />
        </div>
        <h2 className="p-[10px] flex justify-center text-[25px] text-gray-700 bg-slate-200 my-5 mb-7 hover:bg-gray-300 hover:text-white hover:transition hover:duration-700">
          TOTAL {totalVentas.toFixed(2)} 
        </h2>
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

export default TablaVentas;
