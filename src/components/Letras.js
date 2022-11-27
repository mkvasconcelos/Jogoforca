import React from "react";
import styled from "styled-components";

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
    <Section>
      {/* // <section className="letras"> */}
      {alfabeto.map((l) => (
        <button
          key={l}
          data-test="letter"
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
      {/* </section> */}
    </Section>
  );
}

const Section = styled.section`
  margin: 70px 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  button {
    font-weight: 700;
    font-size: 16px;
    width: 40px;
    height: 40px;
    color: #798a9f;
    background: #9faab5;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    margin: 10px;
    cursor: pointer;
  }
  .button-enable {
    background: #e1ecf4;
    color: #7aa7c7;
  }
`;
