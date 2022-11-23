import React from "react";

export default function Jogo(props) {
  return (
    <main className="jogo">
      <section>
        <img src={props.image} alt="imagem-forca"></img>
      </section>
      <section>
        <button onClick={props.onClickFunction} disabled={props.word}>
          Escolher Palavra
        </button>
        <div>
          <span
            className={
              props.answer === 1
                ? "word-right"
                : props.answer === -1 || props.pontuation === 6
                ? "word-wrong"
                : ""
            }
          >
            {props.showWord}
            {/* {props.word} */}
          </span>
        </div>
      </section>
    </main>
  );
}
