const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playerName = document.querySelector(".lang input");
    //start the game
    const startGame = () => {
        const playBtn = document.querySelector(".introduction button");
        const introToGame = document.querySelector(".introduction");
        const matchPart = document.querySelector(".match");
        playBtn.addEventListener("click", () => {
            if (playerName.value !== "") {
                document.querySelector(".player-score h2").textContent = playerName.value;
            }else {
                playerName.value="Player"
            }
            introToGame.classList.add("fadeOut");
            matchPart.classList.add("fadeIn");
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);
                setTimeout(() => {
                    //HERE IS WE CALL COMPUTER HANDS FUNCTION
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
        }
        //Check for rock
        else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = playerName.value + " wins";
                pScore++;
                updateScore();
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
            }
        }
        //Check for paper
        else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = playerName.value + " wins";
                pScore++;
                updateScore();

            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();

            }
        }
        //Check for scissors
        else if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = playerName.value + " wins";
                pScore++;
                updateScore();

            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();

            }
        }
    }

//Is call the all the inner function
    startGame();
    playMatch();

}
//cal the start game function
game();