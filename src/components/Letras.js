import React from "react";

export default function Letras(props) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <section className="letras">
      {alfabeto.map((l) => (
        <button
          key={l}
          className={
            !props.word ||
            props.pontuation === 6 ||
            props.answer !== 0 ||
            props.list.includes(l)
              ? ""
              : "button-enable"
          }
          onClick={props.onClickFunction}
          disabled={
            !props.word ||
            props.pontuation === 6 ||
            props.answer !== 0 ||
            props.list.includes(l)
          }
          value={l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </section>
  );
}
