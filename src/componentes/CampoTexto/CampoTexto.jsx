import React, { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>Nome</label>
      <input value={valor} onChange={aoDigitado} placeholder="Digite o nome do produto" />
    </div>
  );
};

export default CampoTexto;
