
import "./App.css";

import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar.jsx";
import UserList from "./Components/Gestion_usuarios/UsersList.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import TablaVentas from "./Components/AgregarVentas/TablaVentas.jsx";



function App() {

 


  return (
    <>

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tablaventas" element={<TablaVentas />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
