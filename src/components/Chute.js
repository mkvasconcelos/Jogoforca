import React from "react";

export default function Chute(props) {
  return (
    <section className="chute">
      <span>Já sei a palavra!</span>
      <input
        disabled={!props.word || props.answer !== 0 || props.pontuation === 6}
        onChange={props.handleChange}
        value={props.guess}
        data-test="guess-input"
      ></input>
      <button
        disabled={!props.word || props.answer !== 0 || props.pontuation === 6}
        onClick={props.onClickFunction}
        data-test="guess-button"
      >
        Chutar
      </button>
    </section>
  );
}
