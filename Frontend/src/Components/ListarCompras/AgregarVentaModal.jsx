import  { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const AgregarVentaModal = ({ isOpen, closeModal, agregarVenta }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    numeroVenta: "",
    vendedor: "",
    cliente: "",
    estadoVenta: "",
    estadoPago: "",
    total: "",
    pagado: "",
    saldo: "",
    metodoPago: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarVenta(formData);
    closeModal();
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
                htmlFor="numeroVenta"
                className="block text-sm font-medium text-gray-600"
              >
                Nro. Venta/Factura:
              </label>
              <input
                type="text"
                id="numeroVenta"
                name="numeroVenta"
                value={formData.numeroVenta}
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
                htmlFor="estadoVenta"
                className="block text-sm font-medium text-gray-600"
              >
                Estado de la Venta:
              </label>
              <input
                type="text"
                id="estadoVenta"
                name="estadoVenta"
                value={formData.estadoVenta}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="estadoPago"
                className="block text-sm font-medium text-gray-600"
              >
                Estado de Pago:
              </label>
              <select
                id="estadoPago"
                name="estadoPago"
                value={formData.estadoPago}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="Pagado">Pagado</option>
                <option value="No Pagado">No Pagado</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Total:
              </label>
              <input
                type="number"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Pagado:
              </label>
              <input
                type="number"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Saldo:
              </label>
              <input
                type="number"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Metodo de Pago:
              </label>
              <input
                type="text"
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

export default AgregarVentaModal;

AgregarVentaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  agregarVenta: PropTypes.func.isRequired,
};
