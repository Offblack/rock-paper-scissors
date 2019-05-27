let gameResult = '';

const playerMove = function () {
   oneGame.playerHand = this.dataset.option;
   playerOptions.forEach(oneOption => {
      oneOption.classList.remove('active');
   });
   this.classList.add('active');
   console.log(oneGame.playerHand);
}

const makeMove = playerOptions.forEach(oneOption => {
   oneOption.addEventListener('click', playerMove)
});

const aiMove = () => {
   const randomHands = ['rock', 'paper', "scissors"];
   const randomHand = randomHands[Math.floor(Math.random() * 3)];
   oneGame.aiHand = randomHand;
   computerChose.innerHTML = `Computer choose: ${randomHand.toUpperCase().bold()}`;
}

const countGames = () => {
   pointsCounter.innerHTML = `<li>Games: ${gameSummary.numbers}</li>
   <li>Wins: ${gameSummary.wins}</li>
   <li>Losses: ${gameSummary.losses}</li>
   <li>Draws: ${gameSummary.draws}</li>`
}

const startGame = () => {
   if (oneGame.playerHand) {
      aiMove();
      if (oneGame.aiHand === oneGame.playerHand) {
         gameResult = 'Draw!';
         gameSummary.draws++;
      } else if (oneGame.aiHand === "rock" && oneGame.playerHand === "paper") {
         gameResult = 'Win!';
         gameSummary.wins++;
      } else if (oneGame.aiHand === "paper" && oneGame.playerHand === "scissors") {
         gameResult = 'Win!';
         gameSummary.wins++;
      } else if (oneGame.aiHand === "scissors" && oneGame.playerHand === "rock") {
         gameResult = 'Win!';
         gameSummary.wins++;
      } else {
         gameResult = 'Lose!';
         gameSummary.losses++;
      }
      gameSummary.numbers++;
      gameShowResult.innerHTML = gameResult;
      countGames()
   }
}

const playGame = play.addEventListener('click', startGame);