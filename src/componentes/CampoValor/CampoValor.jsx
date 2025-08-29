import React, { useState } from "react";
import "./CampoValor.css";

const CampoPreco = () => {
  const [valor, setValor] = useState("");

  const aoDigitado = (event) => {
    const text = event.target.value;
    const regex = /^[0-9]*[.,]?[0-9]{0,2}$/;
    if (regex.test(text) || text === "") {
      setValor(text);
    }
  };

  return (
    <div className="campo-valor">
      <label>Preço</label>
      <input
        type="text"
        placeholder="Digite o preço do produto"
        value={valor}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoPreco;
