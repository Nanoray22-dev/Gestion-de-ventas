// Dashboard.js

import Cards from "./Cards";


const Dashboard = () => {
  // Datos de ejemplo para el dashboard
  // const inventoryData = 150;
  // const recentSales = 25;

  return (
    <div>
      <h2 className="pt-20">Dashboard</h2>
      {/* <p>Inventario Actual: {inventoryData}</p>
      <p>Ventas Recientes: {recentSales}</p> */}
      {/* Más contenido del dashboard según tus necesidades */}
      <Cards/>
    </div>
  );
};
export default Dashboard;