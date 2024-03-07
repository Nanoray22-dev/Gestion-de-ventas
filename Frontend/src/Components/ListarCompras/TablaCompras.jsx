import { useEffect, useState } from "react";
import axios from "axios";
import { endpoint } from "../../services/http";

import { Menu } from "@headlessui/react";
import AgregarVentaModal from "./AgregarVentaModal";
import EditComprasModal from "./EditComprasModal";

function TablaCompras() {
  const [compras, setCompras] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompraId, setSelectedCompraId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [comprasPerPage, setComprasPerPage] = useState(10);

  const getPdf = async () => {
    const response = await axios.get(`${endpoint}/compras-pdf`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );
    window.open(url, "_blank");
  };

  useEffect(() => {
    fetchCompras();
    fetchUsuarios();
  }, []);

  const fetchCompras = async () => {
    try {
      const response = await axios.get(`${endpoint}/compras`);
      setCompras(response.data);
    } catch (error) {
      console.log("Error fetching compras", error);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(`${endpoint}/users`);
      setUsuarios(response.data);
    } catch (error) {
      console.log("Error fetching usuarios", error);
    }
    console.log(setUsuarios)
  };

  const getPdf = async () => {
    const response = await axios.get(`${endpoint}/compras-pdf`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );
    window.open(url, "_blank");
  };

  // const openAddCompraModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addCompra = async (compraData) => {
    try {
        await axios.post(`${endpoint}/compras`, compraData);

      console.log("Compra agregada correctamente");

      closeModal();
      fetchCompras();
    } catch (error) {
      console.error("Error al agregar compra:", error.message);
    }
  };

  const openEditModal = (compraId) => {
    setSelectedCompraId(compraId);
    setIsEditModalOpen(true);
  };

  const handleEditCompra = async (updatedCompraData) => {
    try {
          await axios.put(
        `${endpoint}/compras/${selectedCompraId}`,
        updatedCompraData
      );
      console.log("Compra actualizada correctamente");
      closeEditModal();
      fetchCompras();
    } catch (error) {
      console.error("Error al actualizar compra:", error.message);
    }
  };

  const deleteCompra = async (compraId) => {
    try {
      await axios.delete(`${endpoint}/compras/${compraId}`);
      console.log("Compra eliminada correctamente");
      fetchCompras();
    } catch (error) {
      console.error("Error al eliminar compra:", error.message);
    }
  };

  const filteredCompras = compras.filter((compra) =>
    // compra.cliente.toLowerCase().includes(searchTerm.toLowerCase())
    compra.cliente
  );

  const indexOfLastCompra = currentPage * comprasPerPage;
  const indexOfFirstCompra = indexOfLastCompra - comprasPerPage;
  const currentCompras = filteredCompras.slice(indexOfFirstCompra, indexOfLastCompra);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePerPageChange = (event) => {
    setComprasPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="py-10">
      <AgregarVentaModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addCompra={addCompra}
      />

      {selectedCompraId && (
        <EditComprasModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={handleEditCompra}
          compra={compras.find((compra) => compra.id === selectedCompraId)}
        />
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <select
            id="comprasPerPage"
            value={comprasPerPage}
            onChange={handlePerPageChange}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <label htmlFor="comprasPerPage" className="ml-2 text-gray-700">
            Registros por página
          </label>
        </div>

        <div className="flex items-center space-x-10">
          <label htmlFor="search" className="mr-2">
            Buscar:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Buscar por cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <div className="flex items-center">
            <button
              className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2 transition duration-300 hover:bg-gray-500 hover:text-white"
              onClick={getPdf}
            >
              PDF
            </button>

            <button className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2 transition duration-300 hover:bg-gray-500 hover:text-white">
              CSV
            </button>
            <button className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2 transition duration-300 hover:bg-gray-500 hover:text-white">
              Impresión
            </button>
            <button className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2 transition duration-300 hover:bg-gray-500 hover:text-white">
              Borrar
            </button>
            <button className="bg-gray-300 text-gray-700 rounded px-4 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
              Visibilidad por Columna
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-slate-100 rounded-md">
          <thead>
            <tr>
              <th className="px-4 py-2 ">
                <input type="checkbox" className="" />
              </th>

              <th className="border px-4 py-2 ">Fecha</th>
              <th className="border px-4 py-2">Nro. Venta/Factura</th>
              <th className="border px-4 py-2">Vendedor</th>
              <th className="border px-4 py-2">Cliente</th>
              <th className="border px-4 py-2">Est. Venta</th>
              <th className="border px-4 py-2">Est. Pago</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Pagado</th>
              <th className="border px-4 py-2">Saldo</th>
              <th className="border px-4 py-2">Metodo de Pago</th>
              <th className="border px-4 py-2">Acción</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentCompras.map((compra) => (
              <tr key={compra.id}>
                <td className="border px-4 py-2">
                  {" "}
                  <input type="checkbox" className="" />
                </td>
                <td className="border px-4 py-2">{compra.fecha}</td>
                <td className="border px-4 py-2">{compra.nro_venta}</td>
                <td className="border px-4 py-2">{compra.vendedor}</td>
                <td className="border px-4 py-2"> {usuarios.find((user) => user.id === compra.cliente)?.username}</td>
                <td className="border px-4 py-2">{compra.est_venta}</td>
                <td className="border px-4 py-2">{compra.est_pago}</td>
                <td className="border px-4 py-2">{compra.total}</td>
                <td className="border px-4 py-2">{compra.pagado}</td>
                <td className="border px-4 py-2">{compra.saldo}</td>
                <td className="border px-4 py-2">{compra.met_pago}</td>
                <td className="border px-4 py-2">
                  <Menu>
                    {({ open }) => (
                      <>
                        <Menu.Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                          Acciones
                        </Menu.Button>

                        <Menu.Items
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 right-2 mt-2 w-[170px] bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none`}
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                                onClick={() => openEditModal(compra.id)}
                              >
                                Editar
                              </button>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-100"
                                    : ""
                                } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                                onClick={() => deleteCompra(compra.id)}
                              >
                                Eliminar
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </>
                    )}
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="pagination flex justify-center mt-4">
        <li className="page-item">
          <a
            className="page-link  border border-gray-300 px-3 py-1 rounded-l"
            href="#"
            onClick={() => paginate(1)}
          >
            Previous
          </a>
        </li>
        {Array.from(
          { length: Math.ceil(filteredCompras.length / comprasPerPage) },
          (_, index) => (
            <li key={index} className="page-item">
              <a
                className="page-link  border border-gray-300 px-3 py-1"
                href="#"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          )
        )}
        <li className="page-item">
          <a
            className="page-link  border border-gray-300 px-3 py-1 rounded-r"
            href="#"
            onClick={() => paginate(2)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TablaCompras;
