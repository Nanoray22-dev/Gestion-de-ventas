import React from "react";

export const Botones = ({ iconText, text }) => {
  return (
    <>
   
      <a href="" className="bg-gray-500 m-2 h-[20px] p-[8px] rounded-[5px] text-gray-300 relative">
        <span className="material-symbols-outlined  left-1">{iconText}</span>
        <button >{text}</button>
      </a>
     
    </>
  );
};
