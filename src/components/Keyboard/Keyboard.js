import React from 'react';
import {
    KEYBOARD_ROW_1,
    KEYBOARD_ROW_2,
    KEYBOARD_ROW_3,
} from '../../constants';
import { getKeyboardLetterChecks } from '../../game-helpers';

function Keyboard({ onKeyPress, userGuesses, isGameOver }) {
    function onClick(e, letter) {
        if (letter === 'ENTER') {
            return;
        }

        e.preventDefault();
        onKeyPress(letter);
    }

    const keyboardLetterChecks = getKeyboardLetterChecks(userGuesses);

    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {KEYBOARD_ROW_1.map((letter) => (
                    <button
                        key={letter}
                        className={`keyboard-key ${
                            keyboardLetterChecks[letter] || ''
                        }`}
                        onClick={(e) => onClick(e, letter)}
                        disabled={isGameOver}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="keyboard-row">
                {KEYBOARD_ROW_2.map((letter) => (
                    <button
                        key={letter}
                        className={`keyboard-key ${
                            keyboardLetterChecks[letter] || ''
                        }`}
                        onClick={(e) => onClick(e, letter)}
                        disabled={isGameOver}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="keyboard-row">
                <button
                    key="enter"
                    className="keyboard-key"
                    onClick={(e) => onClick(e, 'ENTER')}
                >
                    &#9094;
                </button>
                {KEYBOARD_ROW_3.map((letter) => (
                    <button
                        key={letter}
                        className={`keyboard-key ${
                            keyboardLetterChecks[letter] || ''
                        }`}
                        onClick={(e) => onClick(e, letter)}
                        disabled={isGameOver}
                    >
                        {letter}
                    </button>
                ))}
                <button
                    key="backspace"
                    className="keyboard-key"
                    onClick={(e) => onClick(e, 'BACKSPACE')}
                    disabled={isGameOver}
                >
                    &#9003;
                </button>
            </div>
        </div>
    );
}

export default Keyboard;
