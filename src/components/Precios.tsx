"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Precios: React.FC = () => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push('/');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Precios</h2>
      <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%', padding: '10px 20px', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
        Presioname
      </button>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>El medicamento más caro es:</label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Con un precio de:</label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>El medicamento más barato es:</label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Con un precio de:</label>
      </div>
      <button onClick={handleGoToDashboard} style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Ir al Dashboard
      </button>
    </div>
  );
};

export default Precios;
