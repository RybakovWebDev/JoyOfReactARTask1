import React from "react";

function GuessHistory({ guessList }) {
  return (
    <div className='guess-results'>
      {guessList.map(({ id, guess }) => (
        <p key={id} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
