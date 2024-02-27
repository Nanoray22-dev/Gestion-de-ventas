import  { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const AddUserModal = ({ isOpen, closeModal, addUser }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    empresa: '',
    telefono: '',
    role: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userData);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Agregar Usuario"
    >
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Nombre de Empresa:</label>
          <input type="text" name="empresa" value={userData.empresa} onChange={handleChange} />
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input type="text" name="telefono" value={userData.telefono} onChange={handleChange} />
        </div>
        <div>
          <label>Papel:</label>
          <input type="text" name="role" value={userData.role} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="status" value={userData.status} onChange={handleChange} />
        </div>
        <button type="submit">Agregar Usuario</button> <br />
        <button type="button" onClick={closeModal}>Cancelar</button>
      </form>
    </Modal>
  );
};

export default AddUserModal;






AddUserModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
  };