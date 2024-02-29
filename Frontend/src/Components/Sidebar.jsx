import React from "react";

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <ul>
        <li className="mb-4 hover:text-gray-300 text-xl mt-8">
          <a href="./Dashboard/Dashboard.jsx">Dashboard</a>
        </li>
        <li className="mb-4 hover:text-gray-300 text-xl mt-6">Inventario</li>
        <li className="mb-4 hover:text-gray-300 text-xl mt-6">Ventas</li>
        <li className="mb-4 hover:text-gray-300 text-xl mt-6">Compras</li>
        <li className="mb-4 hover:text-gray-300 text-xl mt-6">
          <a href="./Gestion_usuarios/UsersList.jsx">Usuarios</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
