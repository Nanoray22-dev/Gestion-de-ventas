import React from "react";

export const TextNavbar = ({ spanIcon, text }) => {
  return (
    <>
      <li  className="hover:text-slate-200 transition duration-700 ease-in-out">
        <a href="" className="flex px-2">
          <span className="material-symbols-outlined">{spanIcon}</span>
          <p>{text}</p>
        </a>
      </li>
    </>
  ); 
};
