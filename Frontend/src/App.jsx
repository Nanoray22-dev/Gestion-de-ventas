import { useState } from "react";
import "./App.css";
import Cards from "./Components/Dashboard/Cards.jsx";
import UsersList from "./Components/Gestion_usuarios/UsersList.jsx";
import Navbar from "./Components/Navbar.jsx";





function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };


  return (
    <>

    <div className="flex">
      {/* <SideBar />
      <Navbar /> */}
     {/*  <div className="flex-1 p-8">
        <Cards />
      </div> */}
    </div>
    {/* <TablaVentas/> */}
    <TablaListarCompras/>
 

      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar}  />      
      <Cards />

    </>


  );
}

export default App;
