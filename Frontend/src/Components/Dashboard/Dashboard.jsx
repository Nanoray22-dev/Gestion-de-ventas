// Dashboard.js
import React from "react";

const Dashboard = () => {
  // Datos de ejemplo para el dashboard
  const inventoryData = 150;
  const recentSales = 25;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Inventario Actual: {inventoryData}</p>
      <p>Ventas Recientes: {recentSales}</p>
      {/* Más contenido del dashboard según tus necesidades */}
    </div>
  );
};
