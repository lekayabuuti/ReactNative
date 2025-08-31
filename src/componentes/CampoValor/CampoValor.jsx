// CampoValor.jsx
import React from "react";
import "./CampoValor.css";

const CampoValor = ({ valor, aoAlterado }) => {
  const aoDigitado = (event) => {
    const text = event.target.value;
    const regex = /^[0-9]*[.,]?[0-9]{0,2}$/; // permite até 2 casas decimais
    if (regex.test(text) || text === "") {
      aoAlterado(text); // repassa o valor pro Formulario
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

export default CampoValor;
