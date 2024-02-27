import  { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";
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

  return( 
    <div>
    <h2>Listado de Usuarios</h2>
    <button onClick={openModal}>Agregar Usuario</button>
      <AddUser isOpen={isModalOpen} closeModal={closeModal} addUser={addUser} />
    <table>
      <thead>
        <tr>
          <th>Nombre de Usuario</th>
          <th>Email</th>
          <th>Nombre de Empresa</th>
          <th>Número de Teléfono</th>
          <th>Papel</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {users.map(users => (
          <tr key={users.id}>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td>{users.empresa}</td>
            <td>{users.telefono}</td>
            <td>{users.role}</td>
            <td>{users.status}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default UsersList;
