import React from 'react';
import Keyboard from '../Keyboard';

function Input({ userGuesses, onGuess, isGameOver }) {
    const [value, setValue] = React.useState('');

    function onInputChange(e) {
        if (e.target.value.length > 5) {
            return;
        }

        setValue(e.target.value.toUpperCase());
    }

    function onKeyPress(letter) {
        if (letter === 'BACKSPACE') {
            setValue(value.slice(0, -1));
            return;
        }

        if (value.length === 5) {
            return;
        }

        setValue(value + letter);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (value.length !== 5) {
            return;
        }

        onGuess(value);
        setValue('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={isGameOver}
                id="guess-input"
                type="text"
                value={value}
                onChange={(e) => onInputChange(e)}
            />
            <Keyboard
                userGuesses={userGuesses}
                onKeyPress={onKeyPress}
                isGameOver={isGameOver}
            />
        </form>
    );
}

export default Input;
