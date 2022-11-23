import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
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
  const [pontuation, setPontuation] = useState({ pontuation: 0 });
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState("");
  const [answer, setAnswer] = useState(0);
  const [image, setImage] = useState(images[pontuation.pontuation].image);
  const [kick, setKick] = useState("");
  const [buttonLetter, setButtonLetter] = useState(false);
  function chooseWord() {
    const answer = palavras[Math.round(Math.random() * (palavras.length - 1))];
    setWord(answer);
    let answerList = [];
    for (let i = 0; i < answer.length; i++) {
      answerList.push(answer[i]);
    }
    setWordList(answerList);
    return answer;
  }
  function chooseLetter(e, word) {
    const letter = e.target.value;
    console.log(e.target.value);
    console.log(word.includes(letter));
    if (!word.includes(letter)) {
      increasePontuation();
    }
  }
  function increasePontuation() {
    const newPontuation = pontuation;
    newPontuation.pontuation += 1;
    setPontuation(newPontuation);
    setImage(images[newPontuation.pontuation].image);
  }
  return (
    <div>
      <Jogo
        onClickFunction={() => {
          chooseWord();
        }}
        answer={answer}
        pontuation={pontuation.pontuation}
        word={wordList}
        image={image}
      />
      <Letras
        word={wordList}
        pontuation={pontuation.pontuation}
        button={buttonLetter}
        answer={answer}
        onClickFunction={(e) => {
          chooseLetter(e, word);
          setButtonLetter(true);
        }}
      />
      <Chute
        word={wordList}
        valueText={kick}
        answer={answer}
        pontuation={pontuation.pontuation}
        handleChange={(e) => setKick(e.target.value)}
        onClickFunction={() => {
          kick === word ? setAnswer(1) : setAnswer(-1);
        }}
      />
    </div>
  );
}
