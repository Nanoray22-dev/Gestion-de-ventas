import React from "react";

const Botones = ({ iconText, text }) => {
  return (
    <a href="#" className="inline-block m-2">
      <button className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded flex items-center">
        <span className="material-symbols-outlined">{iconText}</span>
        <span className="ml-1">{text}</span>
      </button>
    </a>
  );
};

export default Botones;
