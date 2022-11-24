import React from "react";

export default function Jogo(props) {
  return (
    <main className="jogo">
      <section>
        <img data-test="game-image" src={props.image} alt="imagem-forca"></img>
      </section>
      <section>
        <button data-test="choose-word" onClick={props.onClickFunction}>
          Escolher Palavra
        </button>
        <div>
          <span
            data-test="word"
            data-answer={!props.word ? "" : props.word}
            className={
              props.answer === 1
                ? "word-right"
                : props.answer === -1 || props.pontuation === 6
                ? "word-wrong"
                : ""
            }
          >
            {props.answer === 1
              ? props.wordList
              : props.answer === -1 || props.pontuation === 6
              ? props.wordList
              : props.showWord}
          </span>
        </div>
      </section>
    </main>
  );
}
