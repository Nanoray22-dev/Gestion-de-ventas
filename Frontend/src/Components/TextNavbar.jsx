import React from "react";

export const TextNavbar = ({ spanIcon, text }) => {
  return (
    <>
      <li >
        <a href="" className="flex px-2">
          <span class="material-symbols-outlined">{spanIcon}</span>
          <p>{text}</p>
        </a>
      </li>
    </>
  );
};
