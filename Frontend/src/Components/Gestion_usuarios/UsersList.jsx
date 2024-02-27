import  { useEffect, useState } from "react";
import axios from "axios";

import AddUserModal from "./AddUser";
import EditUserModal from "./EditUserModal";





function UsersList() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fectching users", error);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const addUser = async (userData) => {
    //  enviar los datos del usuario al backend para su procesamiento
    try {
        const response = await fetch('http://localhost:8000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        if (!response.ok) {
          throw new Error('Error al agregar usuario');
        }
    

        console.log('Usuario agregado correctamente');
    
        // Cerrar el modal después de agregar el usuario
        closeModal();
      } catch (error) {
        console.error('Error al agregar usuario:', error.message);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
      }

    console.log('Usuario agregado:', userData);
  };


  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <button onClick={openModal}>Agregar Usuario</button>
      <AddUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addUser={addUser}
      />
    {selectedUserId && (
  <EditUserModal
    isOpen={isEditModalOpen}
    onClose={closeEditModal}
    onSave={handleEditUser}
    user={users.find(user => user.id === selectedUserId)}
  />
)}
      <table>

  return( 
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Usuarios</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Agregar Usuario
      </button>
      <AddUser isOpen={isModalOpen} closeModal={closeModal} addUser={addUser} />
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
