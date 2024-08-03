function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update hand text
    document.getElementById('userHand').innerText = capitalize(userChoice);
    document.getElementById('computerHand').innerText = capitalize(computerChoice);

    // Add animation
    document.getElementById('userHand').classList.add('shake');
    document.getElementById('computerHand').classList.add('shake');

    // Remove animation class after animation ends
    setTimeout(() => {
        document.getElementById('userHand').classList.remove('shake');
        document.getElementById('computerHand').classList.remove('shake');
    }, 500);

    // Determine result
    let result;
    if (userChoice === computerChoice) {
        result = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`;
}

// Capitalize the first letter of the string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}