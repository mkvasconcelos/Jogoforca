import React from "react";

export default function Chute(props) {
  return (
    <section className="chute">
      <span>Já sei a palavra!</span>
      <input disabled={!props.word}></input>
      <button disabled={!props.word}>Chutar</button>
    </section>
  );
}
