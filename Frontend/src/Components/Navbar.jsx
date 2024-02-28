import  { useState } from "react";
import { TextNavbar } from "./TextNavbar";
import SideBar from "./SideBar";


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="bg-slate-100 p-[15px] text-gray-500 shadow-lg shadow-gray-300">
        <ul className="flex items-center justify-between">
          <div className="rounded-[5px] hover:transition hover:duration-700 hover:ease-in-out bg-slate-200">
            <button onClick={toggleSidebar} className="p-2">
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
              <TextNavbar spanIcon="person" text="Admin" onClick={toggleDropdown} />
              {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-md">
                  <ul>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Administrar Usuarios</li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Configuración</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>
      {showSidebar && <SideBar />}
    </>
  );
};

export default Navbar;
