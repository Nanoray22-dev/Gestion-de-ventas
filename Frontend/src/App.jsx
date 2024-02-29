import { useState } from "react";
import "./App.css";
import Cards from "./Components/Dashboard/Cards.jsx";
import UsersList from "./Components/Gestion_usuarios/UsersList.jsx";
import Navbar from "./Components/Navbar.jsx";




import { TablaVentas } from "./Components/AgregarVentas/TablaVentas";
import Sidebar from "./Components/Dashboard/Sidebar.jsx";

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
