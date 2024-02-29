import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import UsersList from "./Components/Gestion_usuarios/UsersList.jsx";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";


import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards";
import { TablaVentas } from "./Components/AgregarVentas/TablaVentas";

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };


  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar}  />
      
      <Cards />
    </>


  );
}

export default App;
