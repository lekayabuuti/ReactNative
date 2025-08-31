import React from "react";
import "./Lista.css";
const Lista = (props) => {
  

  return (
    <div className="lista">
      <h2>Lista de Professores</h2>
      {props.objetos.map((objeto, index) => (
        <div key={index}>
          <strong>Nome:</strong> {objeto.nome}
          <br />
          <strong>Preço:</strong> {objeto.preco}
          <br />
          <strong>Seção:</strong> {objeto.secao}
          <br />
          <strong>Marca:</strong> {objeto.marca}
          
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Lista;
