import React from "react";
import "./Produto.css";
const Produto = (props) => {
    const imagensMarcas = {
    HP: "/imagens/hp.png",
    Dell: "/imagens/dell.png",
    Positivo: "/imagens/positivo.png",
    Asus: "/imagens/asus.png",
    "Xing Ling genérico": "/imagens/xingling.png",
  };

  return (
    <div className="produto">
      <div className="cabecalho">
        
       {imagensMarcas[props.marca] && (
            <div className="logo-box">
              <img
                src={imagensMarcas[props.marca]}
                alt={props.marca}
                className="logo-marca"
              />
            </div>
          )}
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.preco}</h5>
      </div>
    </div>
  );
};
export default Produto;
