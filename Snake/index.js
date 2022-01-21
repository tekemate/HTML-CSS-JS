const grid = document.querySelector(".grid")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
const width = 10;
let appleIndex = 0;


function createGrid() {
    for (let i = 0; i < 100; i++) {
        let square = document.createElement("div")
        square.innerText = i
        square.classList.add("square")
        grid.appendChild(square)
        squares.push(square)

    }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add("snake"))

function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width) ||
        (currentSnake[0] % width === width-1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
    ) 
    return clearInterval(timerId)


    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)

    if () {

    }
    squares[currentSnake[0]].classList.add('snake')
}

move()

let timerId = setInterval(move, 1000)

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple")
}

generateApples();


function control(e) {
    if (e.key === "ArrowRight") {
        direction = 1;
    } else if (e.key === "ArrowUp") {
        direction = -width;
    } else if (e.key === "ArrowLeft") {
        direction = -1;
    } else if (e.key === "ArrowDown") {
        direction = +width;
    }
}

document.addEventListener("keydown", control)
