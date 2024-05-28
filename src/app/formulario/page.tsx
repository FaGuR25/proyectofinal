"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    ...Medicina });

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
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Formulario</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nombre de Medicina
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Gramos
          </label>
          <input
            type="number"
            value={gramos}
            onChange={(e) => setGramos(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Precio
          </label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Marca</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Guardar
        </button>
        <button
          type="button"
          onClick={handleViewPrices}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "green",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Ver Precios
        </button>
      </form>
    </div>
  );
}

export default Formulario;
