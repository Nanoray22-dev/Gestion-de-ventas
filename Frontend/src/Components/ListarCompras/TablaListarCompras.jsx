import  { useState } from "react";
import Botones from "../AgregarVentas/Botones";
import TablaCompras from "./TablaCompras";
import AgregarVentaModal from "./AgregarVentaModal";

const TablaListarCompras = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const agregarVenta = (formData) => {};

  return (
    <>
      <div className="w-full">
        <div className="m-7 flex justify-between items-center">
          <div className="flex gap-4 ">
            <Botones iconText="add" text="Añadir Ventas" onClick={openModal} />
            <Botones iconText="select_window" text="Ventas de Importación" />
          </div>
          <div className="flex gap-4 items-center">
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
        </div>

        <TablaCompras />
      </div>
      <AgregarVentaModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        agregarVenta={agregarVenta}
      />
    </>
  );
};

export default TablaListarCompras;
