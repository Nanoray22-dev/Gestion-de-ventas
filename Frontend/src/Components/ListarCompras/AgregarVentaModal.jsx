import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const AgregarVentaModal = ({ isOpen, closeModal, agregarVenta }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    nro_venta: "",
    vendedor: "",
    cliente: "",
    est_venta: "",
    est_pago: "",
    total: "",
    pagado: "",
    saldo: "",
    met_pago: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fecha") {
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Datos a enviar:", JSON.stringify(formData)); // Agregado para depuración
      const response = await fetch("http://127.0.0.1:8000/api/compras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("La venta se agregó correctamente");
        agregarVenta(formData);
        closeModal();
      } else {
        console.error("Hubo un problema al agregar la venta");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Añadir Ventas"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Añadir Venta</h2>
      <div className="modal-body">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="fecha"
                className="block text-sm font-medium text-gray-600"
              >
                Fecha:
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="nro_venta"
                className="block text-sm font-medium text-gray-600"
              >
                Nro. Venta/Factura:
              </label>
              <input
                type="text"
                id="nro_venta"
                name="nro_venta"
                value={formData.nro_venta}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="vendedor"
                className="block text-sm font-medium text-gray-600"
              >
                Vendedor:
              </label>
              <input
                type="text"
                id="vendedor"
                name="vendedor"
                value={formData.vendedor}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cliente"
                className="block text-sm font-medium text-gray-600"
              >
                Cliente:
              </label>
              <input
                type="text"
                id="cliente"
                name="cliente"
                value={formData.cliente}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="est_venta"
                className="block text-sm font-medium text-gray-600"
              >
                Estado de la Venta:
              </label>
              <input
                type="text"
                id="est_venta"
                name="est_venta"
                value={formData.est_venta}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="est_pago"
                className="block text-sm font-medium text-gray-600"
              >
                Estado de Pago:
              </label>
              <select
                id="est_pago"
                name="est_pago"
                value={formData.est_pago}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="Realizado">Pagado</option>{" "}
                <option value="No Pagado">No Pagado</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="total"
                className="block text-sm font-medium text-gray-600"
              >
                Total:
              </label>
              <input
                type="number"
                id="total"
                name="total"
                value={formData.total}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pagado"
                className="block text-sm font-medium text-gray-600"
              >
                Pagado:
              </label>
              <input
                type="number"
                id="pagado"
                name="pagado"
                value={formData.pagado}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="saldo"
                className="block text-sm font-medium text-gray-600"
              >
                Saldo:
              </label>
              <input
                type="number"
                id="saldo"
                name="saldo"
                value={formData.saldo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="met_pago"
                className="block text-sm font-medium text-gray-600"
              >
                Método de pago:
              </label>
              <input
                type="text"
                id="met_pago"
                name="met_pago"
                value={formData.met_pago}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar Venta
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

AgregarVentaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  agregarVenta: PropTypes.func.isRequired,
};

export default AgregarVentaModal;
