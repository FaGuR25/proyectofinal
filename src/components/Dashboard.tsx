"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.css";

interface Medicine {
  nombre: string;
  gramos: string;
  precio: string;
  marca: string;
}

const Dashboard: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const router = useRouter();

  const handleAddMedicine = () => {
    router.push("/formulario");
  };

  const handleViewPrices = () => {
    router.push("/precios");
  };

  useEffect(() => {
    fetch("http://localhost:3100/Medicina")
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);

        if (data.length > 0) {
          // Almacena el medicamento más caro en el estado local del navegador
          const mostExpensiveMedicine = data.reduce((prev: Medicine, current: Medicine) => {
            return parseFloat(current.precio) > parseFloat(prev.precio) ? current : prev;
          });
          localStorage.setItem("mostExpensiveMedicine", JSON.stringify(mostExpensiveMedicine));

          // Almacena el medicamento más barato en el estado local del navegador
          const cheapestMedicine = data.reduce((prev: Medicine, current: Medicine) => {
            return parseFloat(current.precio) < parseFloat(prev.precio) ? current : prev;
          });
          localStorage.setItem("cheapestMedicine", JSON.stringify(cheapestMedicine));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Dashboard</h1>
      <button onClick={handleAddMedicine} className={styles.addMedicineButton}>
        Agregar Medicina
      </button>
      <button onClick={handleViewPrices} className={styles.viewPricesButton}>
        Ver Precios
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre de Medicina</th>
            <th>Gramos</th>
            <th>Precio</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.nombre}</td>
              <td>{medicine.gramos}</td>
              <td>{medicine.precio}</td>
              <td>{medicine.marca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
