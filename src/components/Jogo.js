import React from "react";
import styled from "styled-components";

export default function Jogo(props) {
  return (
    <Main>
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
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  margin: 40px;
  justify-content: space-between;
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: end;
  }
  section span {
    font-size: 50px;
    font-weight: 700;
    font-family: "Noto Sans", "Roboto", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
  }
  button {
    width: 200px;
    height: 60px;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    background-color: #27ae60;
    border-radius: 8px;
    border: none;
  }
  button:hover {
    cursor: pointer;
  }
  img {
    width: 400px;
  }

  .word-right {
    color: #27ae60;
  }

  .word-wrong {
    color: #ff0000;
  }
`;
