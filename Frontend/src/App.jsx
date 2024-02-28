import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar";
import Cards from "./Components/Cards";
import { TablaVentas } from "./Components/AgregarVentas/TablaVentas";

import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/SideBar/Sidebar.jsx/index.js";



function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };


  return (
    <>
   {/*  <div className="flex">
      <SideBar />
      <Navbar />
      <div className="flex-1 p-8">
        <Cards />
      </div>
    </div> */}
    <TablaVentas/>
    </>
  );
}

export default App;
