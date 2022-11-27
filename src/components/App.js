import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import caracterEspecial from "./caracterEspecial";

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
  const [lettersUsed, setLettersUsed] = useState([]);
  const [condSpecialCharacter, setCondSpecialCharacter] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState("");
  if (condSpecialCharacter) {
    inputLetter(specialCharacter);
    setCondSpecialCharacter(false);
  }
  function chooseWord() {
    const chosenWord =
      palavras[Math.round(Math.random() * (palavras.length - 1))];
    const newPontuation = { pontuation: 0 };
    let chosenWordList = [];
    let newAnswerList = [];
    const newLettersUsed = [];
    const newKick = "";
    setPontuation(newPontuation);
    setWord(chosenWord);
    setWordList(chosenWordList);
    setAnswer(0);
    setAnswerList(newAnswerList);
    setImage(images[newPontuation.pontuation].image);
    setKick(newKick);
    setLettersUsed(newLettersUsed);
    for (let i = 0; i < chosenWord.length; i++) {
      chosenWordList.push(chosenWord[i]);
      newAnswerList.push("_");
    }
    setAnswerList(newAnswerList);
    setWordList(chosenWordList);
    return answer;
  }

  function chooseLetter(e) {
    const letter = e.target.value;
    const newLettersUsed = [...lettersUsed, letter];
    setLettersUsed(newLettersUsed);
    checkLetter(letter);
  }

  function increasePontuation() {
    const newPontuation = pontuation;
    newPontuation.pontuation += 1;
    setPontuation(newPontuation);
    setImage(images[newPontuation.pontuation].image);
  }

  function checkLetter(letter) {
    let condition = false;
    const list = ["a", "e", "i", "o", "u", "c"];
    let specialLetter = "";
    if (list.includes(letter)) {
      for (let i = 0; i < caracterEspecial[letter].length; i++) {
        condition += wordList.includes(caracterEspecial[letter][i]);
        if (wordList.includes(caracterEspecial[letter][i])) {
          specialLetter = caracterEspecial[letter][i];
        }
      }
    } else {
      condition += wordList.includes(letter);
      if (wordList.includes(letter)) {
        specialLetter = letter;
      }
    }
    if (condition === 0) {
      increasePontuation();
    } else if (condition === 1) {
      inputLetter(specialLetter);
    } else {
      inputLetter(letter);
      setSpecialCharacter(specialLetter);
      setCondSpecialCharacter(true);
    }
  }

  function inputLetter(letter) {
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
    setAnswerList(() => newAnswerList);
  }

  return (
    <>
      <GlobalStyle />
      <Jogo
        onClickFunction={() => {
          chooseWord();
        }}
        answer={answer}
        pontuation={pontuation.pontuation}
        word={word}
        wordList={wordList}
        showWord={answerList}
        image={image}
      />
      <Letras
        word={wordList}
        pontuation={pontuation.pontuation}
        answer={answer}
        list={lettersUsed}
        onClickFunction={(e) => {
          chooseLetter(e);
        }}
      />
      <Chute
        word={wordList}
        valueText={kick}
        answer={answer}
        pontuation={pontuation.pontuation}
        guess={kick}
        handleChange={(e) => setKick(e.target.value)}
        onClickFunction={() => {
          if (kick === word) {
            setAnswer(1);
          } else {
            setAnswer(-1);
            setImage(images[6].image);
          }
          setKick("");
        }}
      />
    </>
  );
}
