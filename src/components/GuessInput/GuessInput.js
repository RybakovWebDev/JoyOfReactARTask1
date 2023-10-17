import React, { useState } from "react";

function GuessInput({ guessListHandler, end }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (value) => {
    setInputValue(value.toLocaleUpperCase());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const lengthError = "The word has to be 5 characters long! 👀";
    const guess = inputValue;
    if (guess.length === 5) {
      guessListHandler(guess);
      console.info({ guess });
      setInputValue("");
    } else {
      console.info({ lengthError });
    }
  };

  return (
    <form className='guess-input-wrapper' onSubmit={(e) => submitHandler(e)}>
      <label htmlFor='guess-input'>Enter guess (5 characters long):</label>
      <input
        id='guess-input'
        type='text'
        pattern='\w{5,5}'
        disabled={end}
        placeholder='5 character word here'
        value={inputValue}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
