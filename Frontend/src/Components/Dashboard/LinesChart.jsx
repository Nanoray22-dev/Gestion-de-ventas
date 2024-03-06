import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LinesChart() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    
    const fetchIncomeData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/ingresos');
        const data = await response.json();
        const incomeValues = data.map(item => item.total);
        setIncomeData(incomeValues);
      } catch (error) {
        console.error('Error fetching income data:', error);
      }
    };

    
    const fetchExpenseData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/gastos');
        const data = await response.json();
        const expenseValues = data.map(item => item.valor);
        setExpenseData(expenseValues);
      } catch (error) {
        console.error('Error fetching expense data:', error);
      }
    };

    fetchIncomeData();
    fetchExpenseData();
  }, []);

  const midata = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Pago Recibido",
        data: incomeData,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Pago Enviado",
        data: expenseData,
      },
    ],
  };

  const misoptions = {
    scales: {
      y: {
        min: -25,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };

  return <Line data={midata} options={misoptions} />;
}

export default LinesChart;
