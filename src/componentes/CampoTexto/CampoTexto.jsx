import React from "react";
import "./CampoTexto.css";

const CampoTexto = () => {
  return (
    <div className="campo-texto">
      <label>Nome</label>
      <input placeholder="Digite o nome do produto" />
    </div>
  );
};

export default CampoTexto;
