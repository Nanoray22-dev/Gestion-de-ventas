import { useEffect, useState } from "react";
import axios from "axios";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import { Menu } from '@headlessui/react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
      const response = await axios.post('http://localhost:8000/api/users', userData);
      console.log('Usuario agregado correctamente');
      closeModal();
      fetchUsers();
    } catch (error) {
      console.error('Error al agregar usuario:', error.message);
    }
  };

  const openEditModal = (userId) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const handleEditUser = async (userData) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/users/${userData.id}`, userData);
      console.log('Usuario editado correctamente');
      closeEditModal();
      fetchUsers();
    } catch (error) {
      console.error('Error al editar usuario:', error.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/users/${userId}`);
      console.log('Usuario eliminado correctamente');
      fetchUsers();
    } catch (error) {
      console.error('Error al eliminar usuario:', error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Usuarios</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Agregar Usuario
      </button>
      <AddUserModal isOpen={isModalOpen} closeModal={closeModal} addUser={addUser} />
      {selectedUserId && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={handleEditUser}
          user={users.find(user => user.id === selectedUserId)}
        />
      )}
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
          {users.map((user) => (
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

                      <Menu.Items className={`${open ? 'block' : 'hidden'} absolute z-10 right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                              onClick={() => openEditModal(user.id)}
                            >
                              Editar
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                              onClick={() => deleteUser(user.id)}
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
  );
}

export default UsersList;
