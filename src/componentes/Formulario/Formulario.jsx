// Formulario.jsx
import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoValor from "../CampoValor/CampoValor";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [secao, setSecao] = useState("");
  const [marca, setMarca] = useState("");

  const secoes = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling genérico"];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form submetido =>", { nome, preco, secao, marca });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensa
          label="Seção"
          itens={secoes}
          valor={secao}
          aoAlterado={(valor) => setSecao(valor)}
        />
        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <CampoTexto valor={nome} aoAlterado={(valor) => setNome(valor)} />
        <CampoValor valor={preco} aoAlterado={(valor) => setPreco(valor)} />
        <Botao texto="Inserir Produto" />
      </form>
    </section>
  );
};

export default Formulario;
