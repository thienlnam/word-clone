import React from 'react';

function Banner({
    isGameOver,
    isGameWon,
    numOfGuesses,
    correctWord,
    onRestartGame,
}) {
    return (
        isGameOver && (
            <div className={`${isGameWon ? 'happy' : 'sad'} banner`}>
                {isGameWon ? (
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong> {numOfGuesses} guesses</strong>.
                    </p>
                ) : (
                    <p>
                        Sorry, the correct answer is{' '}
                        <strong>{correctWord}</strong>.
                    </p>
                )}

                <button className="restart-game-button" onClick={onRestartGame}>
                    Restart Game!
                </button>
            </div>
        )
    );
}

export default Banner;
