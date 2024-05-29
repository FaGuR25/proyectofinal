"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Formulario.module.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [gramos, setGramos] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateForm = () => {
    if (!nombre || !gramos || !precio || !marca) {
      setError("Todos los campos son obligatorios.");
      return false;
    }

    const nombreRegex = /^[a-zA-Z\s]+$/; 
    if (!nombreRegex.test(nombre)) {
      setError("El nombre del medicamento no puede contener números.");
      return false;
    }

    const numeroPositivoRegex = /^\d+$/; 
    if (!numeroPositivoRegex.test(gramos)) {
      setError("Los gramos deben ser un valor numérico positivo.");
      return false;
    }

    if (!numeroPositivoRegex.test(precio)) {
      setError("El precio debe ser un valor numérico positivo.");
      return false;
    }

    const marcaRegex = /^[a-zA-Z\s]+$/; 
    if (!marcaRegex.test(marca)) {
      setError("La marca no puede contener números.");
      return false;
    }

    setError(null); 
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const Medicina = { nombre, gramos, precio, marca };
    localStorage.setItem("medicina", JSON.stringify(Medicina));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ...Medicina,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3100/Medicina", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    console.log("datos del tema: ", Medicina);

    router.push("/");
  };

  const handleViewPrices = () => {
    router.push("/precios");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulario</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form>
        <div>
          <label>Nombre de Medicina</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Gramos</label>
          <input
            type="number"
            value={gramos}
            onChange={(e) => {
              const value = e.target.value;
              if (!value.startsWith('-')) {
                setGramos(value);
              }
            }}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => {
              const value = e.target.value;
              if (!value.startsWith('-')) {
                setPrecio(value);
              }
            }}
          />
        </div>
        <div>
          <label>Marca</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className={styles.saveButton}
        >
          Guardar
        </button>
        <button
          type="button"
          onClick={handleViewPrices}
          className={styles.viewPricesButton}
        >
          Ver Precios
        </button>
      </form>
    </div>
  );
}

export default Formulario;
