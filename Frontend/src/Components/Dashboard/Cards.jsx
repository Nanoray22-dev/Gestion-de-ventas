import React, { useState, useEffect } from "react";
import { Graficas } from "./Graficas";
import { LineasGraficas } from "./LineasGraficas";

export default function Cards() {
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(0); 

  useEffect(() => {

    fetch('http://127.0.0.1:8000/api/ingresos')
      .then(response => response.json())
      .then(data => {
        const total = data.reduce((acc, item) => acc + item.total, 0);
        setTotalIncome(total);
      })
      .catch(error => console.error('Error fetching total income:', error));


    fetch('http://127.0.0.1:8000/api/gastos')
      .then(response => response.json())
      .then(data => {

        const totalGastos = data.reduce((acc, item) => acc + item.valor, 0);
        setTotalExpenses(totalGastos);
      })
      .catch(error => console.error('Error fetching total expenses:', error));
  }, []);


  const totalFinal = totalIncome !== null ? totalIncome - totalExpenses : null;

  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center px-32 ">
            <div className="w-40 h-40 mb-6 flex items-center justify-center rounded-lg bg-gray-200">
              <img
                src="public/svg/grafico.svg"
                alt="Grafico"
                className="w-20 h-32"
              />
            </div>
            <p className="text-center text-xl font-semibold mb-4">Ingresos</p>
            <p className="text-center text-2xl font-bold">
              {totalIncome !== null && totalIncome !== undefined ? totalIncome.toFixed(2) : 'Loading...'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center px-32">
            <div className="w-40 h-40 mb-6 flex items-center justify-center rounded-lg bg-gray-200">
              <img
                src="public/svg/lock.svg"
                alt="Lock"
                className="w-20 h-32"
              />
            </div>
            <p className="text-center text-xl font-semibold mb-4">Gastos</p>
            <p className="text-center text-2xl font-bold">{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center px-32">
            <div className="w-40 h-40 mb-6 flex items-center justify-center rounded-lg bg-gray-200">
              <img
                src="public/svg/trophy.svg"
                alt="Trofeo"
                className="w-20 h-32"
              />
            </div>
            <p className="text-center text-xl font-semibold mb-4">Total</p>
            <p className="text-center text-2xl font-bold">
              {totalFinal !== null && totalFinal !== undefined ? totalFinal.toFixed(2) : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10 ">
        <Graficas
          titulo='Flujo de Fondos'
        />
        <LineasGraficas/>
      </div>
    </>
  );
}
