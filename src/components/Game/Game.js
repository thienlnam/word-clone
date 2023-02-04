import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import Guesses from '../Guesses';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
    const [userGuesses, setUserGuesses] = React.useState([]);
    const [isGameOver, setIsGameOver] = React.useState(false);
    const [isGameWon, setIsGameWon] = React.useState(false);
    const [answer, setAnswer] = React.useState(sample(WORDS));

    function onRestartGame() {
        setIsGameOver(false);
        setIsGameWon(false);
        setUserGuesses([]);
        setAnswer(sample(WORDS));
        console.info({ answer });
    }

    function onGuess(guess) {
        const result = checkGuess(guess, answer);
        const nextUserGuesses = [...userGuesses, result];

        setUserGuesses(nextUserGuesses);

        if (guess === answer) {
            setIsGameWon(true);
            setIsGameOver(true);
            return;
        }

        if (nextUserGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            setIsGameOver(true);
            setIsGameWon(false);
            return;
        }
    }

    return (
        <>
            <Banner
                isGameOver={isGameOver}
                isGameWon={isGameWon}
                numOfGuesses={userGuesses.length}
                correctWord={answer}
                onRestartGame={onRestartGame}
            />
            <Guesses userGuesses={userGuesses} />
            <Input
                onGuess={onGuess}
                isGameOver={isGameOver}
                userGuesses={userGuesses}
            />
        </>
    );
}

export default Game;
