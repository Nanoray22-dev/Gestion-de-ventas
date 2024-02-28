import React, { PureComponent } from "react";

export default class Cards extends PureComponent {
  render() {
    return (
      <div className="flex flex-wrap mt-20">
        <div className="w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              src="public/svg/grafico.svg"
              alt="Grafico"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center">Ingresos</p>
            <p className="text-center">0.00</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
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
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              src="public/svg/trophy.svg"
              alt="Trofeo"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center">Ganancias</p>
            <p className="text-center">0.00</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[400px] p-4 mx-4">
            <div className="bg-white rounded-lg shadow-lg p-20 text-center">
              <h2 className="text-2xl mb-4">Estado de Fondos</h2>
              <div className="text-4xl">📊</div>
              <p>Nombre: Estado de Fondos</p>
            </div>
          </div>

          <div className="w-[400px] p-4 mx-4">
            <div className="bg-white rounded-lg shadow-lg p-20 text-center">
              <h2 className="text-2xl mb-4">Trimestre Enero - Marzo 2024</h2>
              <div className="text-4xl">📅</div>
              <p>Nombre: Trimestre Enero - Marzo 2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
