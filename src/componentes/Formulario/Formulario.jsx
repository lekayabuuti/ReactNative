// Formulario.jsx
import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoValor from "../CampoValor/CampoValor";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [secao, setSecao] = useState("");
  const [marca, setMarca] = useState("");

  const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling genérico"];

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (!nome.trim() || !preco.trim() || !secao.trim() || !marca.trim()) {
      alert(
        "Por favor, preencha todos os campos antes de adicionar o produto!"
      );
      return;
    }

    props.aoProdutoCadastrado({
      nome: nome,
      preco: preco,
      secao: secao,
      marca: marca,
    });

    setNome("");
    setPreco("");
    setSecao("");
    setMarca("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensa
          label="Seção"
          itens={props.secoes}
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
