import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Secao from "./componentes/Secao/Secao";
function App() {
  const [produtos, setProdutos] = useState([]);

  const secoes = [
    {nome: "Computadores", corFundo: "#4ec5a8"}, 
    {nome: "Acessórios", corFundo: "#6fa9f0"},
    {nome: "Impressoras", corFundo: "#57b5c2"},
    {nome: "Games", corFundo: "#7aa7f0"},
    {nome: "Gadgets", corFundo: "#82d1f7"}
  ];

  const listaSecoes = secoes.map((secao) => secao.nome);

  const adicionaProduto = (produto) => {
    console.log(produto);
    const listaNova = [...produtos, produto];
    setProdutos(listaNova);
  };

  return (
    <div className="App">
      <Formulario
        secoes={listaSecoes}
        aoProdutoCadastrado={(produto) => adicionaProduto(produto)}
      />
      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corFundo={secao.corFundo}
          produtos={produtos.filter((p) => p.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;
