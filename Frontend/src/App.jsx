
import "./App.css";

import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Dashboard/Sidebar.jsx";
import { TablaListarCompras } from "./Components/ListarCompras/TablaListarCompras.jsx";





function App() {

 


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
