import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar";
import Cards from "./Components/Cards";
import { TablaVentas } from "./Components/AgregarVentas/TablaVentas";

function App() {
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
