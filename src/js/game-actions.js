import * as gameStructure from './game-structure';
import * as DOM from './dom';

let gameResult = '';

const playerMove = function () {
   gameStructure.oneGame.playerHand = this.dataset.option;
   DOM.playerOptions.forEach(oneOption => {
      oneOption.classList.remove('active');
   });
   this.classList.add('active');
}

const makeMove = DOM.playerOptions.forEach(oneOption => {
   oneOption.addEventListener('click', playerMove)
});

const aiMove = () => {
   const randomHands = ['rock', 'paper', "scissors"];
   const randomHand = randomHands[Math.floor(Math.random() * 3)];
   gameStructure.oneGame.aiHand = randomHand;
   DOM.computerChose.innerHTML = `Computer choose: ${randomHand.toUpperCase().bold()}`;
}

const startGame = () => {
   if (gameStructure.oneGame.playerHand) {
      aiMove();
      if (gameStructure.oneGame.aiHand === gameStructure.oneGame.playerHand) {
         gameResult = 'Draw!';
         gameStructure.gameSummary.draws++;
      } else if (gameStructure.oneGame.aiHand === "rock" && gameStructure.oneGame.playerHand === "paper") {
         gameResult = 'Win!';
         gameSummary.wins++;
      } else if (gameStructure.oneGame.aiHand === "paper" && gameStructure.oneGame.playerHand === "scissors") {
         gameResult = 'Win!';
         gameStructure.gameSummary.wins++;
      } else if (gameStructure.oneGame.aiHand === "scissors" && gameStructure.oneGame.playerHand === "rock") {
         gameResult = 'Win!';
         gameStructure.gameSummary.wins++;
      } else {
         gameResult = 'Lose!';
         gameStructure.gameSummary.losses++;
      }
      gameStructure.gameSummary.numbers++;
      DOM.gameShowResult.innerHTML = gameResult;
      countGames()
   }
}

const playGame = DOM.play.addEventListener('click', startGame);