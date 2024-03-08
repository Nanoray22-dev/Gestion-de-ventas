import React from "react";
import Bars from "./BarsChart";

export const LineasGraficas = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 px-12 w-[40%]">
      <p className="text-left text-xl font-semibold mb-4">Reporte Monetario</p>
        <Bars />
      </div>
    </>
  );
};
