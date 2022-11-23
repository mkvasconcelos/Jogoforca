import React from "react";
import { useState } from "react";

export default function Chute(props) {
  return (
    <section className="chute">
      <span>Já sei a palavra!</span>
      <input disabled={!props.word} onChange={props.handleChange}></input>
      <button disabled={!props.word} onClick={props.onClickFunction}>
        Chutar
      </button>
    </section>
  );
}
