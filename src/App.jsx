import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Secao from "./componentes/Secao/Secao";
function App() {
  const [produtos, setProdutos] = useState([]);

  const secoes = [
    {
      nome: "Computadores",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Games",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
  ];

  const listaSecoes = secoes.map((secao) => secao.nome);

  const adicionaProduto = (produto) => {
    console.log(produto);
    const listaNova = [...produtos, produto];
    setProdutos(listaNova);
  };

  return (
    <div>
      <Formulario
        secoes={listaSecoes}
        aoProdutoCadastrado={(produto) => adicionaProduto(produto)}
      />
      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter((p) => p.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;
