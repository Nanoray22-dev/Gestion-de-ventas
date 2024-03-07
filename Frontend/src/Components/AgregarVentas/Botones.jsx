import React from "react";

const Botones = ({ iconText, text, onClick }) => {
  return (
    <a href="#" className="inline-block m-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center"
        onClick={onClick}
      >
        <span className="material-symbols-outlined">{iconText}</span>
        <span className="ml-1">{text}</span>
      </button>
    </a>
  );
};

export default Botones;
