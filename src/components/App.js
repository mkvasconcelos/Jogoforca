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
  const [answerList, setAnswerList] = useState([]);
  const [image, setImage] = useState(images[pontuation.pontuation].image);
  const [kick, setKick] = useState("");
  const [buttonLetter, setButtonLetter] = useState(false);
  const [lettersUsed, setLettersUsed] = useState([]);
  function chooseWord(answerList) {
    const chosenWord =
      palavras[Math.round(Math.random() * (palavras.length - 1))];
    setWord(chosenWord);
    let chosenWordList = [];
    let newAnswerList = [...answerList];
    for (let i = 0; i < chosenWord.length; i++) {
      chosenWordList.push(chosenWord[i]);
      newAnswerList.push("_");
    }
    setAnswerList(newAnswerList);
    setWordList(chosenWordList);
    return answer;
  }
  function chooseLetter(e, answerList, word, lettersUsed) {
    const letter = e.target.value;
    const newLettersUsed = [...lettersUsed, letter];
    setLettersUsed(newLettersUsed);
    if (!wordList.includes(letter)) {
      increasePontuation();
    } else {
      let newAnswerList = [];
      let guess = "";
      for (let i = 0; i < answerList.length; i++) {
        if (letter === wordList[i]) {
          newAnswerList.push(letter);
          guess += letter;
        } else {
          newAnswerList.push(answerList[i]);
          guess += answerList[i];
        }
      }
      guess === word ? setAnswer(1) : setAnswer(0);
      setKick(guess);
      setAnswerList(newAnswerList);
    }
    console.log(newLettersUsed);
  }
  function increasePontuation() {
    const newPontuation = pontuation;
    newPontuation.pontuation += 1;
    setPontuation(newPontuation);
    setImage(images[newPontuation.pontuation].image);
  }

  return (
    <>
      <Jogo
        onClickFunction={() => {
          chooseWord(answerList);
        }}
        answer={answer}
        pontuation={pontuation.pontuation}
        word={wordList}
        showWord={answerList}
        image={image}
      />
      <Letras
        word={wordList}
        pontuation={pontuation.pontuation}
        button={buttonLetter}
        answer={answer}
        list={lettersUsed}
        onClickFunction={(e) => {
          chooseLetter(e, answerList, word, lettersUsed);
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
    </>
  );
}
