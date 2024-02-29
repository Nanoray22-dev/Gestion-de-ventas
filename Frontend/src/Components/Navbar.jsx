import { useState } from "react";
import { TextNavbar } from "./TextNavbar";
import Sidebar from "./Dashboard/Sidebar";

const Navbar = ({toggleSidebar}) => {
  const [showDropdown, setShowDropdown] = useState(false);
 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-100 p-[20px] text-gray-500 shadow-sm shadow-gray-300 top-0 w-full fixed z-10">
        <ul className="flex items-center justify-between">
          <div className="rounded-[5px] hover:transition hover:duration-700 hover:ease-in-out bg-slate-200">
            {/* Toggle Sidebar on button click */}
            <button onClick={(e)=>toggleSidebar(e)} className="p-2">
              <TextNavbar spanIcon="menu" text="" />
            </button>
          </div>

          <div>
            <img src="" alt="" />
          </div>
          <div className="flex">
            <TextNavbar spanIcon="shopping_bag" text="Ventas" />
            <TextNavbar spanIcon="language" text="Idioma" />
            <TextNavbar spanIcon="info" text="Ayuda" />
            <div className="relative">
              <TextNavbar
                spanIcon="person"
                text="Admin"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-md">
                  <ul>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      Administrar Usuarios
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      Configuración
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>    
      
    </>
  );
};

export default Navbar;
