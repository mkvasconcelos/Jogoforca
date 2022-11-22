import React, { useState } from "react";
import Jogo from "./Jogo";
import palavras from "./palavras";

export default function App() {
  const images = [
    { error: 0, image: "assets/forca0.png" },
    { error: 1, image: "assets/forca1.png" },
    { error: 2, image: "assets/forca2.png" },
    { error: 3, image: "assets/forca3.png" },
    { error: 4, image: "assets/forca4.png" },
    { error: 5, image: "assets/forca5.png" },
    { error: 6, image: "assets/forca6.png" },
  ];
  const [word, setWord] = useState("");
  const [image, setImage] = useState(images[0].image);
  function chooseWord() {
    const answer = palavras[Math.round(Math.random() * (palavras.length - 1))];
    let answerList = [];
    for (let i = 0; i < answer.length; i++) {
      answerList.push(answer[i]);
    }
    console.log(answerList);
    setWord(answerList);
    return answerList;
  }
  return (
    <div>
      <Jogo
        onClickFunction={() => {
          chooseWord();
        }}
        word={word}
        image={image}
      />
    </div>
  );
}
