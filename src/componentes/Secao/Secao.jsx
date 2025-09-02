import React from "react";
import "./Secao.css";
import Produto from "../Produto/Produto";

const Secao = (props) => {
  const corDeFundo = { backgroundColor: props.corFundo };

  if (props.produtos.length === 0) return null;

  return (
    <section className="secao" style={corDeFundo}>
      <h3>{props.nome}</h3>
      <div className="produtos">
        {props.produtos.map((prod) => (
          <Produto
            key={prod.nome}
            nome={prod.nome}
            preco={prod.preco}
            marca={prod.marca}
          />
        ))}
      </div>
    </section>
  );
};

export default Secao;
