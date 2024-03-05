import { TextNavbar } from "./TextNavbar";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ShoppingCartIcon,
  CashIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserAddIcon,
  ChevronRightIcon,
  CogIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";

import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        {/* Botón de menú para mostrar/ocultar el sidebar */}
        <button className="menu-icon" onClick={toggleSidebar}>
          <TextNavbar spanIcon="menu" text="" />
        </button>
        <div className="header-left list-none">
        <TextNavbar spanIcon="menu" text="" />
        </div>
        <div className="flex list-none">
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
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer ">
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
      </header>
      {/* End Header */}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={sidebarOpen ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center">
              <ChartBarIcon className="w-8 h-8 mr-1 ml-8" />
              Tablero
            </h2>
          </div>
          <span className="material-icons-outlined" onClick={toggleSidebar}>
            close
          </span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link
              to="/dashboard"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <HomeIcon className="w-6 h-6 mr-2" />
              Inicio
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="tablalistarcompras"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <ShoppingCartIcon className="w-6 h-6 mr-2" />
              Compra
              <ChevronRightIcon className="w-6 h-6 ml-20" />
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="/userlist"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <UserAddIcon className="w-6 h-6 mr-2" />
              Usuarios
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="/tablaventas"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <CashIcon className="w-6 h-6 mr-2" />
              Venta
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="tablalistarcompras"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <PlusSmIcon className="w-6 h-6 mr-2" />
              Productos
            </Link>
          </li>
          <li className="sidebar-list-item">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <CurrencyDollarIcon className="w-6 h-6 mr-2" />
              Gasto
              <ChevronRightIcon className="w-6 h-6 ml-20" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300"
            >
              <CogIcon className="w-6 h-6 mr-2" />
              Settings
            </a>
          </li>
        </ul>
      </aside>
      

      {/* End Sidebar */}

      {/* Main */}
      <main className="main-container">
        <Outlet />
      </main>
      {/* End Main */}
    </div>
  );
};

export default Navbar;
