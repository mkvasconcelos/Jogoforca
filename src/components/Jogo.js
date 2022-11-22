import React from "react";

export default function Jogo(props) {
  return (
    <main className="jogo">
      <section>
        <img src={props.image} alt="imagem-forca"></img>
      </section>
      <section>
        <button onClick={props.onClickFunction}>Escolher Palavra</button>
        <div>
          <span>{props.word}</span>
        </div>
      </section>
    </main>
  );
}
