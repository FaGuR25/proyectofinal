import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Precios.module.css";

interface Medicine {
  nombre: string;
  gramos: string;
  precio: string;
  marca: string;
}

const Precios: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [mostExpensiveMedicine, setMostExpensiveMedicine] = useState<Medicine | null>(null);
  const [cheapestMedicine, setCheapestMedicine] = useState<Medicine | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3100/Medicina")
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleShowPrices = () => {
    if (medicines.length === 0) {
      alert('No hay datos de medicamentos disponibles.');
      return;
    }

    const mostExpensive = medicines.reduce((prev, current) => {
      return parseFloat(current.precio) > parseFloat(prev.precio) ? current : prev;
    });

    const cheapest = medicines.reduce((prev, current) => {
      return parseFloat(current.precio) < parseFloat(prev.precio) ? current : prev;
    });

    setMostExpensiveMedicine(mostExpensive);
    setCheapestMedicine(cheapest);
  };

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.preciosContainer}>
      <h2>Precios</h2>
      <button className={styles.pressButton} onClick={handleShowPrices}>
        Presioname
      </button>
      <div className={styles.priceInfo}>
        <label>
          <b>El medicamento más caro es:</b> {mostExpensiveMedicine ? mostExpensiveMedicine.nombre : ''}
        </label>
        <div className={styles.priceDetails}>
          <span>Precio: {mostExpensiveMedicine ? mostExpensiveMedicine.precio : ''}</span> <br />
        </div>
        <br />
        <label>
          <b>El medicamento más barato es:</b> {cheapestMedicine ? cheapestMedicine.nombre : ''}
        </label>
        <div className={styles.priceDetails}>
          <span>Precio: {cheapestMedicine ? cheapestMedicine.precio : ''}</span>
        </div>
      </div>
      <button onClick={goHome} className={styles.goToDashboardButton}>
        Ir al Dashboard
      </button>
    </div>
  );
};

export default Precios;
