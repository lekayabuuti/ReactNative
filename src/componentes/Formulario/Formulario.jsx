import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoValor from "../CampoValor/CampoValor";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Dados do produto:</h2>
        <CampoTexto />
        <CampoValor />
      </form>
    </section>
  );
};
export default Formulario;
