// Dashboard.js

import Cards from "./Cards";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="main-title">
        <p className="font-weight-bold">DASHBOARD</p>
      </div>
      <div className="flex items-center justify-between px-5 pt-3">
        <h2 className="text-4xl ml-14">Bienvenido Admin</h2>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-2xl">
            Hoy
          </button>
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            Los últimos 7 días
          </button>
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            Este mes
          </button>
          <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-2xl">
            Este año
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
};
export default Dashboard;
