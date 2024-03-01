import { useState } from "react";
import "./App.css";
import Cards from "./Components/Dashboard/Cards.jsx";
import UsersList from "./Components/Gestion_usuarios/UsersList.jsx";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Dashboard/Sidebar.jsx";
import { TablaListarCompras } from "./Components/ListarCompras/TablaListarCompras.jsx";





function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };


  return (
    <>

    <div className="flex">
    <Sidebar showSidebar={showSidebar}  />      

    <Navbar toggleSidebar={toggleSidebar}/>
      <div className="flex-1 p-8">
        <Cards />
      </div>
    </div>
    {/* <TablaVentas/> */}
    {/* <TablaListarCompras/> */}

      {/* <Cards /> */}

    </>


  );
}

export default App;
