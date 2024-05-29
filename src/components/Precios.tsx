import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Precios.module.css';

const Precios: React.FC = () => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push('/');
  };

  return (
    <div className={styles.preciosContainer}>
      <h2>Precios</h2>
      <button className={styles.pressButton} onClick={handleGoToDashboard}>
        Presioname
      </button>
      <div className={styles.priceInfo}>
        <label> <b>El medicamento más caro es</b></label> 
        <div className={styles.priceDetails}>
          <span>Nombre del medicamento: </span> <br></br>
          <span>Precio: </span> <br></br>
        </div><br></br>
        <label> <b>El medicamento más barato es</b></label> 
        <div className={styles.priceDetails}>
          <span>Nombre del medicamento: </span><br></br>
          <span>Precio: </span>
        </div>
      </div>
      <button onClick={handleGoToDashboard} className={styles.goToDashboardButton}>
        Ir al Dashboard
      </button>
    </div>
  );
};

export default Precios;
