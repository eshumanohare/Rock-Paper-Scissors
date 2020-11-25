const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // Start Game

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //   Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //   Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        compareHands(this.textContent, computerChoice);
        updateScore();

        // Updating the images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScorePara = document.querySelector(".player-score p");
    const computerScorePara = document.querySelector(".computer-score p");
    playerScorePara.textContent = playerScore;
    computerScorePara.textContent = computerScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a Tie";
      return;
    }
    // Checking for playerchoice if rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerScore++;
        return;
      } else if (computerChoice === "paper") {
        winner.textContent = "Computer Wins";
        computerScore++;
        return;
      }
    }
    // Checking for playerchoice if paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        computerScore++;
        return;
      } else if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        playerScore++;
        return;
      }
    }
    //Checking for playerchoice if scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        computerScore++;
        return;
      } else if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        playerScore++;
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
