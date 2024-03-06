import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Bars() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/ingresos");
        const data = await response.json();
        const incomeValues = data.map((item) => item.total);
        setIncomeData(incomeValues);
      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };

    const fetchExpenseData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/gastos");
        const data = await response.json();
        const expenseValues = data.map((item) => -1 * item.valor);
        setExpenseData(expenseValues);
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchIncomeData();
    fetchExpenseData();
  }, []);

  const meses = [
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
  ];

  const midata = {
    labels: meses,
    datasets: [
      {
        label: "Ingresos",
        data: incomeData,
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
      {
        label: "Gastos",
        data: expenseData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const misoptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        min: Math.min(...expenseData, 0),
        max: Math.max(...incomeData, 0),
      },
      x: {
        ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  return <Bar data={midata} options={misoptions} />;
}
