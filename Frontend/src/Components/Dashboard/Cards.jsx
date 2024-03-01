import React, { useState, useEffect } from "react";

export default function Cards() {
  const [totalIncome, setTotalIncome] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ingresos')
      .then(response => response.json())
      .then(data => {
        const total = data.reduce((acc, item) => acc + item.amount, 0);
        setTotalIncome(total);
      })
      .catch(error => console.error('Error fetching total income:', error));
  }, []);

  return (
    <div className="flex" style={{ marginTop: '20px' }}>
      <div className="w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center  mt-[100px]">
          <img
            src="public/svg/grafico.svg"
            alt="Grafico"
            className="w-16 h-16 mb-2"
          />
          <p className="text-center">Ingresos</p>
          <p className="text-center">{totalIncome ? totalIncome.toFixed(2) : 'Loading...'}</p>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center  mt-[100px]">
          <img
            src="public/svg/lock.svg"
            alt="Lock"
            className="w-16 h-16 mb-2"
          />
          <p className="text-center">Costos</p>
          <p className="text-center">0.00</p>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center  mt-[100px]">
          <img
            src="public/svg/trophy.svg"
            alt="Trofeo"
            className="w-16 h-16 mb-2"
          />
          <p className="text-center">Total</p>
          <p className="text-center">{totalIncome ? totalIncome.toFixed(2) : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}