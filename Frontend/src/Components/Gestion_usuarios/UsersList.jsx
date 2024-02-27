import { useEffect, useState } from "react";
import axios from "axios";
import AddUserModal from "./AddUser";
import EditUserModal from "./EditUserModal";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

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

  const openEditModal = (userId) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users",
        userData
      );
      if (!response.ok) {
        throw new Error("Error adding user");
      }
      console.log("User added successfully");
      closeModal();
      fetchUsers(); // Fetch users again to update the list
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = async (userId, newData) => {
    try {
      await axios.put(`http://localhost:8000/api/users/${userId}`, newData);
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, ...newData } : user
        )
      );
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleEditUser = (updatedUserData) => {
    editUser(selectedUserId, updatedUserData); // Pass selectedUserId to editUser function
    closeEditModal();
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
      {/* <EditUserModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={handleEditUser}
        user={selectedUserId} // Pass selectedUserId instead of selectedUser
      /> */}
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.empresa}</td>
              <td>{user.telefono}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => openEditModal(user.id)}>Edit</button>{" "}
                <br />
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
