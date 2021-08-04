function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('What do you play?').toLowerCase()
    computerSelection = computerPlay().toLowerCase()

    console.log(`Computer plays ${computerSelection}!`);
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock.';
        } else if (computerSelection === 'scissors') {
            return 'You win! Rock beats Scissors.';
        } else {
            return 'It\'s a draw!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper';
        } else if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock';
        } else {
            return 'It\'s a draw!';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors';
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors beats papers'
        } else {
            return 'It\'s a draw!'
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i ++) {
        result = playRound();
        if (result.includes('win')) {
            console.log('Player wins!');
            playerScore += 1;
        } else if (result.includes('lose')) {
            console.log('Computer wins!');
            computerScore += 1;
        } else {
            console.log('Draw!');
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player has ${playerScore} points whereas computer only has ${computerScore} points. Player wins!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer has ${computerScore} points whereas player only has ${playerScore} points. Computer wins!`);
    } else {
        console.log(`Computer and player both have ${playerScore}. It\'s a draw!`);
    }
}

game();