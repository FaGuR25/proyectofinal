"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Formulario.module.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [gramos, setGramos] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const router = useRouter();

  const handleSave = () => {
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
            onChange={(e) => setGramos(e.target.value)}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
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
