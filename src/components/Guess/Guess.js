import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guessList, answer }) {
  const fullWord = (id, word) => {
    const guessTest = word ? checkGuess(word, answer) : "";
    const guessCharacters = word ? word.split("") : range(5);
    return (
      <p key={id} className='guess'>
        {guessCharacters.map((c, i) => (
          <span key={i} className={`cell${guessTest ? " " + guessTest[i].status : ""}`}>
            {typeof c === "number" ? "" : c}
          </span>
        ))}
      </p>
    );
  };
  return (
    <div className='guess-results'>
      {guessList.map(({ id, guess }) => fullWord(id, guess))}
      {range(NUM_OF_GUESSES_ALLOWED - guessList.length).map((p, i) => fullWord(i, ""))}
    </div>
  );
}

export default Guess;
