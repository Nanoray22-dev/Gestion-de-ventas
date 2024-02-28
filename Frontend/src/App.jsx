import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-8">
        <Navbar />
        <Cards />
        {/* <UsersList /> */}
      </div>
    </div>
  );
}

export default App;
