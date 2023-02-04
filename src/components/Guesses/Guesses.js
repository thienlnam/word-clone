import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ userGuesses }) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
                const guess = userGuesses[i];

                return (
                    <p key={i} className="guess">
                        {range(0, 5).map((j) => {
                            const letterGuess = guess && guess[j];

                            if (!letterGuess) {
                                return <span key={j} className="cell"></span>;
                            }

                            const style = letterGuess.status
                                ? `cell ${letterGuess.status}`
                                : 'cell';
                            const letter = letterGuess.letter || '';
                            return (
                                <span key={j} className={style}>
                                    {letter}
                                </span>
                            );
                        })}
                    </p>
                );
            })}
        </div>
    );
}

export default Guesses;
