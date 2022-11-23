import React from "react";

export default function Chute(props) {
  return (
    <section className="chute">
      <span>Já sei a palavra!</span>
      <input
        disabled={!props.word || props.answer !== 0 || props.pontuation === 6}
        onChange={props.handleChange}
      ></input>
      <button
        disabled={!props.word || props.answer !== 0 || props.pontuation === 6}
        onClick={props.onClickFunction}
      >
        Chutar
      </button>
    </section>
  );
}
