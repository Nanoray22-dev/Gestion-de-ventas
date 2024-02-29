// Sidebar.js

import React from 'react';
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon, CashIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/outline';

const Sidebar = ({showSidebar}) => {
  return (
    <div className={`bg-gray-200 w-64 p-4 h-screen absolute ${showSidebar ? 'top-0':'top-[-1050px]'} transition-all duration-500`}>
    
      <h2 className="mt-20 text-xl font-bold mb-4 flex items-center">
        <ChartBarIcon className="w-6 h-6 mr-2" />
        Tablero
      </h2>
      <ul>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300">
            <HomeIcon className="w-6 h-6 mr-2" />
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300">
            <ShoppingBagIcon className="w-6 h-6 mr-2" />
            Producto
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300">
            <ShoppingCartIcon className="w-6 h-6 mr-2" />
            Compra
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300">
            <CashIcon className="w-6 h-6 mr-2" />
            Venta
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300">
            <CurrencyDollarIcon className="w-6 h-6 mr-2" />
            Gasto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
