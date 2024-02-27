import React from "react";
import { TextNavbar } from "./TextNavbar";

export const Navbar = () => {
  return (
    <>
      <nav className=" bg-slate-100 p-[15px] text-gray-500 shadow-lg shadow-gray-300">
        <ul className="flex items-center justify-between">
          <div className="rounded-[5px] hover:transition hover:duration-700 hover:ease-in-out bg-slate-200">
            <TextNavbar spanIcon="menu" text="" />
          </div>
          <div>
            
            <img src="" alt="" />
          </div>
          <div className="flex">
            <TextNavbar spanIcon="shopping_bag" text="Ventas" />
            <TextNavbar spanIcon="language" text="Idioma" />
            <TextNavbar spanIcon="info" text="Ayuda" />
            <TextNavbar spanIcon="person" text="Admin" />

          </div>
        </ul>
      </nav>
    </>
  );
};
