import { useState } from "react";
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
import { TextNavbar } from "./TextNavbar";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    // Close the admin dropdown when language dropdown is toggled
    setShowAdminDropdown(false);
  };

  const toggleAdminDropdown = () => {
    setShowAdminDropdown(!showAdminDropdown);
    // Close the language dropdown when admin dropdown is toggled
    setShowLanguageDropdown(false);
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

          {/* Language Dropdown */}
          <div className="relative">
            <TextNavbar
              spanIcon="language"
              text="Idioma"
              onClick={toggleLanguageDropdown}
            />
            {showLanguageDropdown && (
              <div
                className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-md"
                onMouseLeave={() => setShowLanguageDropdown(false)}
              >
                <ul>
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                    <Link to="/">Español</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                    <Link to="/">Inglés</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <TextNavbar spanIcon="info" text="Ayuda" />

          {/* Admin Dropdown */}
          <div className="relative">
            <TextNavbar
              spanIcon="person"
              text="Admin"
              onClick={toggleAdminDropdown}
            />
            {showAdminDropdown && (
              <div
                className="absolute right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-md"
                onMouseLeave={() => setShowAdminDropdown(false)}
              >
                <ul>
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer ">
                    <Link to="/userlist">Administrar Usuarios</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                    <Link to="/">Configuración</Link>
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
      <aside id="sidebar" className={sidebarOpen ? "sidebar-responsive" : ""}>
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
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <HomeIcon className="w-6 h-6 mr-2" />
              Inicio
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="tablalistarcompras"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <ShoppingCartIcon className="w-6 h-6 mr-2" />
              Compra
              <ChevronRightIcon className="w-6 h-6 ml-20" />
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="/userlist"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <UserAddIcon className="w-6 h-6 mr-2" />
              Usuarios
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="/tablaventas"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <CashIcon className="w-6 h-6 mr-2" />
              Venta
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link
              to="tablalistarcompras"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <PlusSmIcon className="w-6 h-6 mr-2" />
              Productos
            </Link>
          </li>
          <li className="sidebar-list-item">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
            >
              <CurrencyDollarIcon className="w-6 h-6 mr-2" />
              Gasto
              <ChevronRightIcon className="w-6 h-6 ml-20" />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-400"
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
