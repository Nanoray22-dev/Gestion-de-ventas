import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from 'react-modal';

function EditUserModal({ isOpen, user, onSave, onClose }) {
  const [userData, setUserData] = useState({
    username: user.username || '',
    email: user.email || '',
    empresa: user.empresa || '',
    telefono: user.telefono || '',
    role: user.role || '',
    status: user.status || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Editar Usuario"
    >
      <div>
        <h2>Editar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre de Usuario:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
          <label>Nombre de la Empresa:</label>
          <input type="text" name="empresa" value={userData.companyName} onChange={handleChange} />
          <label>Número de Teléfono:</label>
          <input type="text" name="telefono" value={userData.phoneNumber} onChange={handleChange} />
          <label>Rol:</label>
          <input type="text" name="role" value={userData.role} onChange={handleChange} />
          <label>Estado:</label>
          <input type="text" name="status" value={userData.status} onChange={handleChange} />
          <button type="submit">Guardar Cambios</button>
          <button onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </Modal>
  );
}

EditUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditUserModal;
