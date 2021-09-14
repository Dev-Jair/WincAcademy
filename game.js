// Variables.
const lowerLimit = 1;
const upperLimit = 25;
const tries = 5;
const answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
const guess = '';
const message = `Voer een nummer in van ${lowerLimit} tot ${upperLimit}:`;

// Blijf de gebruiker prompten tot het spel is gestopt.
while (tries > 0) {
    // Prompt de gebruiker voor een gok.
    guess = prompt(message, guess);
    
    // Als de cancel knop wordt ingedrukt, krijgt de gebruiker te zien dat het spel eindigt
    // break uit de loop.
    if (guess == null) {
        alert('Het spel wordt gestopt.');
        break;
    }
    // If the guess is a number...
    else if (isFinite(guess) && guess != '') {
        // Make sure the guess is converted into a number.
        guess = +guess;
        
        // If the guess is less than the range let the user know.
        if (guess < lowerLimit) {
            alert(`Jouw gok moet niet lager zijn dan ${lowerLimit}.`);
        }
        // If the guess is greater than the range let the user know.
        else if (guess > upperLimit) {
            alert(`Jouw gok moet niet groter zijn dan ${upperLimit}.`);
        }
        // If the guess is too high let the user know.
        else if (guess > answer) {
            alert(`Jouw gok is te hoog.`);
        }
        // If the guess is too low let the user know.
        else if (guess < answer) {
            alert(`Jouw gok is te laag.`);
        }
        // If none of the other cases were true that means the answer must have
        // been guessed so let the user know and break out of the loop.
        else {
            alert('Gefeliciteerd je hebt gewonnen! Het spel is nu af.');
            break;
        }
    }
    // If the guess is not a number, let the user know.
    else {
        alert('Je moet een nummer als antwoord invoeren.');
    }
    
    tries = tries - 1;
}

if (tries == 0) {
    alert(`Je hebt geen pogingen meer over. Het antwoord is ${answer}.`);
}