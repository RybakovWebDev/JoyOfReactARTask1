import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessHistory from "../GuessHistory/GuessHistory";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [end, setEnd] = useState(false);

  const guessListHandler = (value) => {
    const nextGuessList = [...guessList, { id: crypto.randomUUID(), guess: value }];
    setGuessList(nextGuessList);
    winTest(value);
  };

  const winTest = (value) => {
    console.log(guessList.length, NUM_OF_GUESSES_ALLOWED);
    const result = checkGuess(value, answer).every((o) => o.status === "correct");
    if (result) {
      setEnd(true);
      setShowBanner(true);
    } else if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setShowBanner(true);
    }
  };

  return (
    <>
      {/* <GuessHistory guessList={guessList} /> */}
      <Guess guessList={guessList} answer={answer} />
      <GuessInput guessListHandler={guessListHandler} end={end} />
      {showBanner && end && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessList.length}</strong>.
          </p>
        </div>
      )}
      {showBanner && !end && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
