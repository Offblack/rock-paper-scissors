import * as DOM from './dom';

export const gameSummary = {
   numbers: 0,
   wins: 0,
   losses: 0,
   draws: 0
}

export const oneGame = {
   playerHand: '',
   aiHand: ''
}

export const countGames = () => {
   DOM.pointsCounter.innerHTML = `<li>Games: ${gameSummary.numbers}</li>
   <li>Wins: ${gameSummary.wins}</li>
   <li>Losses: ${gameSummary.losses}</li>
   <li>Draws: ${gameSummary.draws}</li>`
}