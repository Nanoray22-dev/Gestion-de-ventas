import  { useEffect, useState } from "react";
import axios from "axios";

import AddUserModal from "./AddUserModal";
// import EditUserModal from "./EditUserModal";
import { Menu } from "@headlessui/react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addUser = async (userData) => {
    try {
      const response = await axios.post("http://localhost:8000/api/users", userData);

      if (!response.ok) {
        throw new Error("Error al agregar usuario");
      }

      console.log("Usuario agregado correctamente");

      closeModal();
      fetchUsers();
    } catch (error) {
      console.error("Error al agregar usuario:", error.message);
    }
  };

  const openEditModal = (userId) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const handleEditUser = async (userData) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/users/${userData.id}`, userData);

      if (!response.ok) {
        throw new Error("Error al editar usuario");
      }

      console.log("Usuario editado correctamente");
      closeEditModal();
      fetchUsers();
    } catch (error) {
      console.error("Error al editar usuario:", error.message);
    }
  };

  const deletePerson = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
      console.log("Usuario eliminado correctamente");
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error.message);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePerPageChange = (event) => {
    setUsersPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={openModal}
      >
        Agregar Usuario
      </button>

      <AddUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addUser={addUser}
      />

      <div className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center">
          <select
            id="usersPerPage"
            value={usersPerPage}
            onChange={handlePerPageChange}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <label htmlFor="usersPerPage" className="ml-2 text-gray-700">
            Registros por página
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="">Buscar:</label>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />

          <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">
            PDF
          </button>
          <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">
            CSV
          </button>
          <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">
            Impresión
          </button>
          <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">
            Borrar
          </button>

          <div className="dropdown relative">
            <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">
              Visibilidad por columna
            </button>
            <div className="dropdown-content absolute hidden bg-white rounded shadow-md mt-2">
              <label className="block px-4 py-2">
                <input type="checkbox" /> Nombre de Usuario
              </label>
              <label className="block px-4 py-2">
                <input type="checkbox" /> Email
              </label>
              <label className="block px-4 py-2">
                <input type="checkbox" /> Nombre de Empresa
              </label>
              <label className="block px-4 py-2">
                <input type="checkbox" /> Número de Teléfono
              </label>
              <label className="block px-4 py-2">
                <input type="checkbox" /> Papel
              </label>
              <label className="block px-4 py-2">
                <input type="checkbox" /> Estado
              </label>
            </div>
          </div>
        </div>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre de Usuario</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Nombre de Empresa</th>
            <th className="px-4 py-2">Número de Teléfono</th>
            <th className="px-4 py-2">Papel</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.empresa}</td>
              <td className="border px-4 py-2">{user.telefono}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                        Acciones
                      </Menu.Button>

                      <Menu.Items
                        className={`${
                          open ? "block" : "hidden"
                        } absolute z-10 right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none`}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                              onClick={() => openEditModal(user.id)}
                            >
                              Editar
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button className={`${active ? "bg-gray-100" : ""} block px-4 py-2 text-sm text-gray-700 w-full text-left`} onClick={() => deletePerson(user.id)}>
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

      <ul className="pagination flex p-4 py-4">
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
          { length: Math.ceil(filteredUsers.length / usersPerPage) },
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

export default UsersList;