import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";

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
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar}  />
      
      <Cards />
    </>
  );
}

export default App;
