
let player1Score = 0
let player2Score = 0
let player1Turn = true

const message = document.getElementById("message")
const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


rollBtn.addEventListener("click", () => {
    let diceRoll = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Dice.textContent = diceRoll
        player1Score += diceRoll
        player1Scoreboard.textContent = player1Score
        message.textContent = "Player 2 turn"
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    
    } else {
        player2Dice.textContent = diceRoll
        player2Score += diceRoll
        player2Scoreboard.textContent = player2Score
        message.textContent = "Player 1 turn"
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")        
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        gameOver()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉"
        gameOver()
    }

    player1Turn = !player1Turn;
    
})

resetBtn.addEventListener("click", () => {
    message.textContent = "Player 1 turn"
    player1Score = 0
    player2Score = 0
    player2Scoreboard.textContent = 0
    player1Scoreboard.textContent = 0
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
})

function gameOver() {
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
}