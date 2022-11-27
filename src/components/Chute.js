import React from "react";
import styled from "styled-components";

export default function Chute(props) {
  const condition = !props.word || props.answer !== 0 || props.pontuation === 6;
  return (
    <Section>
      <span>Já sei a palavra!</span>
      <input
        disabled={condition}
        onChange={props.handleChange}
        value={props.guess}
        data-test="guess-input"
      ></input>
      <button
        disabled={condition}
        onClick={props.onClickFunction}
        data-test="guess-button"
      >
        Chutar
      </button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 20px;
    margin-right: 12px;
  }
  input {
    width: 353px;
    height: 40px;
    font-weight: 400;
    font-size: 20px;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
  button {
    margin-left: 12px;
    height: 40px;
    width: 100px;
    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    cursor: pointer;
  }
`;
