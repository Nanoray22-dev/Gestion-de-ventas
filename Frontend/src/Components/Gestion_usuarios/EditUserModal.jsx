import { useState } from "react";
import PropTypes from 'prop-types';

function EditUserModal({ user, onSave, onClose }) {
  const [userData, setUserData] = useState({
    username: user.username || '',
    email: user.email || '',
    roleName: user.roleName || '',
    status: user.status || '',
    companyName: user.companyName || '', // Adding companyName to initial state
    phoneNumber: user.phoneNumber || '', // Adding phoneNumber to initial state
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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Editar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre de Usuario:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
          <label>Nombre de la Empresa:</label>
          <input type="text" name="companyName" value={userData.companyName} onChange={handleChange} />
          <label>Número de Teléfono:</label>
          <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
          <label>Rol:</label>
          <input type="text" name="roleName" value={userData.roleName} onChange={handleChange} />
          <label>Estado:</label>
          <input type="text" name="status" value={userData.status} onChange={handleChange} />
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}

EditUserModal.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    roleName: PropTypes.string,
    status: PropTypes.string,
    companyName: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditUserModal;
