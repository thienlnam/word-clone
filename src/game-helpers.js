export function checkGuess(guess, answer) {
    if (!guess) {
        return null;
    }

    const guessChars = guess.toUpperCase().split('');
    const answerChars = answer.split('');

    return guessChars.map((guessChar, index) => {
        const answerChar = answerChars[index];

        let status;
        if (guessChar === answerChar) {
            status = 'correct';
        } else if (answerChars.includes(guessChar)) {
            status = 'misplaced';
        } else {
            status = 'incorrect';
        }
        return {
            letter: guessChar,
            status,
        };
    });
}

const STATUS_ORDER = {
    correct: 0,
    misplaced: 1,
    incorrect: 2,
};

/**
 * Given the user's guesses, return an object with the letters that have been guessed and their correctness
 * @param {*} userGuesses
 */
export const getKeyboardLetterChecks = (userGuesses) => {
    const keyboardLetterChecks = {};

    userGuesses.forEach((guess) => {
        guess.forEach((letterPair) => {
            const { letter, status } = letterPair;
            // We always want to be showing the most valid guess for a letter on the keyboard
            // Correct -> Misplaced -> Incorrect
            // So if we've already set a letter to correct, we don't want to overwrite it with misplaced or incorrect
            const existingLetter = keyboardLetterChecks[letter];
            if (existingLetter) {
                const isHigherPriority =
                    STATUS_ORDER[status] < STATUS_ORDER[existingLetter];
                if (!isHigherPriority) {
                    return;
                }
            }

            keyboardLetterChecks[letter] = status;
        });
    });

    return keyboardLetterChecks;
};
