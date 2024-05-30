import React, { useState } from "react";

const Header: React.FC = () => {
  const [text, setText] = useState<string | null>(null);

  const handleButtonClick = () => {
    setText("Texto adicional agregado");
  };

  return (
    <div style={{ background: '#555', color: '#fff', padding: '10px 20px' }}>
      <h1>Dashboard Header</h1>
      <button onClick={handleButtonClick}>Agregar Texto</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Header;
