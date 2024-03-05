import React from "react";
import LinesChart from "./LinesChart";

export const Graficas = ({titulo }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 px-12 w-[40%] mx-16">
        <p className="text-left text-xl font-semibold mb-4">{titulo}</p>
        <LinesChart/>
       
      </div>
    </>
  );
};
