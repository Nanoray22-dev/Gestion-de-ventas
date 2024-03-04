import { useState } from "react";
import { TextNavbar } from "./TextNavbar";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ShoppingCartIcon,
  CashIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserAddIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-100 p-[20px] text-gray-500 shadow-sm shadow-gray-300 top-0 w-full fixed z-10">
        <ul className="flex items-center justify-between">
          {/* Sidebar Toggle */}
          <div className="rounded-[5px] hover:transition hover:duration-700 hover:ease-in-out bg-slate-200">
            <button onClick={toggleSidebar} className="p-2">
              <TextNavbar spanIcon="menu" text="" />
            </button>
          </div>

          {/* Logo */}
          <div>
            <img src="" alt="" />
          </div>

          {/* Navigation Links */}
          <div className="flex">
            <Link to="/tablaventas">
              <TextNavbar spanIcon="shopping_bag" text="Ventas" />
            </Link>
            <TextNavbar spanIcon="language" text="Idioma" />
            <TextNavbar spanIcon="info" text="Ayuda" />

            {/* User Dropdown */}
            <div className="relative">
              <TextNavbar
                spanIcon="person"
                text="Admin"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div
                  className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-md"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <ul>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      <Link to="/userlist">Administrar Usuarios</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      <Link to="/">ConfiguraciÓn</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      <Link to="/">Mis compras</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      <Link to="/">Mis ventas</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                      <Link to="/">Log out</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>

      {/* Sidebar */}
      {showSidebar && (
        <div
          className="bg-gray-200 w-64 p-4 h-screen absolute transition-all duration-500"
          onMouseLeave={() => setShowSidebar(false)}
        >
          <h2 className="mt-24 text-3xl font-bold mb-8 text-center flex items-center">
            <ChartBarIcon className="w-8 h-8 mr-1 ml-8" />
            Tablero
          </h2>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
              >
                <HomeIcon className="w-6 h-6 mr-2" />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/userlist"
                className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
              >
                <UserAddIcon className="w-6 h-6 mr-2" />
                Usuarios
              </Link>
            </li>
            <li>
              <Link
                to="/tablaventas"
                className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
              >
                <CashIcon className="w-6 h-6 mr-2" />
                Venta
              </Link>
            </li>
            <li>
              <Link
               to="tablalistarcompras"
                className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
              >
                <ShoppingCartIcon className="w-6 h-6 mr-2" />
                Compra
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
              >
                <CurrencyDollarIcon className="w-6 h-6 mr-2" />
                Gasto
              </a>
            </li>
          </ul>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Navbar;
