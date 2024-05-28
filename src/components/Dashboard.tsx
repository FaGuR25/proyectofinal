"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    router.push('/formulario');
  };

  const handleViewPrices = () => {
    router.push('/precios');
  };

  useEffect(() => {
    fetch("http://localhost:3100/Medicina")
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <button
        onClick={handleAddMedicine}
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Agregar Medicina
      </button>
      <button
        onClick={handleViewPrices}
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Ver Precios
      </button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre de Medicina</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gramos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Precio</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Marca</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{medicine.nombre}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{medicine.gramos}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{medicine.precio}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{medicine.marca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
