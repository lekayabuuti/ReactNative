// CampoTexto.jsx
import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>Nome</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        placeholder="Digite o nome do produto"
      />
    </div>
  );
};

export default CampoTexto;
