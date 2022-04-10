var sfx = {
    move: new Howl({
        src: ['1891_computer-mouse-click-01.mp3']
    }),
    gameOver: new Howl({
        src: ['1256_interface-sound-01.mp3']
    }),
    button: new Howl({
        src: ['1257_interface-sound-02.mp3']
    })
}

let movesArr = ['','','',
'','','',
'','','']

// 0 1 2
// 3 4 5
// 6 7 8

let history = []

let turn = 'X'

let arrayPositionCounter = 0

let xWins = 0
let oWins = 0
let draws = 0

const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

function switchTurn () {
    if (turn === 'X') {
        turn = 'O'
        document.querySelector('.message').innerHTML = 'O is now playing'
    }
    else if (turn === 'O') {
        turn = 'X'
        document.querySelector('.message').innerHTML = 'X is now playing'
    }
}

function moveHistory () {
    newArr = movesArr.map((x) => {return x})
    history.push(newArr)
    console.log(history)
}

moveHistory() //records empty state of board

function winCondition () {
    
    if ((movesArr[0] === 'X' && movesArr[1] === 'X' && movesArr[2] === 'X') || //first row
    (movesArr[3] === 'X' && movesArr[4] === 'X' && movesArr[5] === 'X') || // second row
    (movesArr[6] === 'X' && movesArr[7] === 'X' && movesArr[8] === 'X') || //third row
    (movesArr[0] === 'X' && movesArr[3] === 'X' && movesArr[6] === 'X') || //first column
    (movesArr[1] === 'X' && movesArr[4] === 'X' && movesArr[7] === 'X') || // second column
    (movesArr[2] === 'X' && movesArr[5] === 'X' && movesArr[8] === 'X') || //third column
    (movesArr[0] === 'X' && movesArr[4] === 'X' && movesArr[8] === 'X') || //diagonal left
    (movesArr[2] === 'X' && movesArr[4] === 'X' && movesArr[6] === 'X')  //diagonal right
    ) { 
        document.querySelector('.message').innerHTML = 'X wins!'
        for (i = 0; i < movesArr.length; i++) { //loops through entire board to fill empty spaces to prevent user from adding X or O
            if (movesArr[i] === '') {
                movesArr[i] = '-'
            }
        }

        document.querySelector('.previous').style.display = 'block'  //displays previous button after win/draw condition is met
        xWins = xWins + 1
        document.querySelector('.xwins').innerHTML = `X wins: ${xWins}`

        sfx.gameOver.play()
    }

    else if ((movesArr[0] === 'O' && movesArr[1] === 'O' && movesArr[2] === 'O') || //first row
    (movesArr[3] === 'O' && movesArr[4] === 'O' && movesArr[5] === 'O') || // second row
    (movesArr[6] === 'O' && movesArr[7] === 'O' && movesArr[8] === 'O') || //third row
    (movesArr[0] === 'O' && movesArr[3] === 'O' && movesArr[6] === 'O') || //first column
    (movesArr[1] === 'O' && movesArr[4] === 'O' && movesArr[7] === 'O') || // second column
    (movesArr[2] === 'O' && movesArr[5] === 'O' && movesArr[8] === 'O') || //third column
    (movesArr[0] === 'O' && movesArr[4] === 'O' && movesArr[8] === 'O') || //diagonal left
    (movesArr[2] === 'O' && movesArr[4] === 'O' && movesArr[6] === 'O')  //diagonal right
    ) { 
        document.querySelector('.message').innerHTML = 'O wins!'
        for (i = 0; i < movesArr.length; i++) {
            if (movesArr[i] === '') {
                movesArr[i] = '-'
            }
        }

        document.querySelector('.previous').style.display = 'block'
        oWins = oWins + 1
        document.querySelector('.owins').innerHTML = `O Wins: ${oWins}`

        sfx.gameOver.play()
    }

   else if (document.querySelector('#zero').innerHTML !== '' &&
        document.querySelector('#one').innerHTML !== '' &&
        document.querySelector('#two').innerHTML !== '' &&
        document.querySelector('#three').innerHTML !== '' &&
        document.querySelector('#four').innerHTML !== '' &&
        document.querySelector('#five').innerHTML !== '' &&
        document.querySelector('#six').innerHTML !== '' &&
        document.querySelector('#seven').innerHTML !== '' &&
        document.querySelector('#eight').innerHTML !== ''
        ) {
            document.querySelector('.message').innerHTML = 'Draw!'
            document.querySelector('.previous').style.display = 'block'
            draws = draws + 1
            document.querySelector('.draws').innerHTML = `Draws: ${draws}`

            sfx.gameOver.play()
        }
    
}

// event listeners for buttons
document.querySelector('#zero').addEventListener('click', () => {
    if (movesArr[0] === '') {
        document.querySelector('#zero').innerHTML = turn
        movesArr[0] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#one').addEventListener('click', () => {
    if (movesArr[1] === '') {
        document.querySelector('#one').innerHTML = turn
        movesArr[1] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#two').addEventListener('click', () => {
    if (movesArr[2] === '') {
        document.querySelector('#two').innerHTML = turn
        movesArr[2] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#three').addEventListener('click', () => {
    if (movesArr[3] === '') {
        document.querySelector('#three').innerHTML = turn
        movesArr[3] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#four').addEventListener('click', () => {
    if (movesArr[4] === '') {
        document.querySelector('#four').innerHTML = turn
        movesArr[4] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#five').addEventListener('click', () => {
    if (movesArr[5] === '') {
        document.querySelector('#five').innerHTML = turn
        movesArr[5] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#six').addEventListener('click', () => {
    if (movesArr[6] === '') {
        document.querySelector('#six').innerHTML = turn
        movesArr[6] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#seven').addEventListener('click', () => {
    if (movesArr[7] === '') {
        document.querySelector('#seven').innerHTML = turn
        movesArr[7] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

document.querySelector('#eight').addEventListener('click', () => {
    if (movesArr[8] === '') {
        document.querySelector('#eight').innerHTML = turn
        movesArr[8] = turn
        console.log(movesArr)
        switchTurn()
        winCondition()
        moveHistory()
        sfx.move.play()
    }
})

// reset button
document.querySelector('.reset').addEventListener('click', () => {
    for (i = 0; i < movesArr.length; i++) {
        movesArr[i] = ''
    }

    document.querySelector('#zero').innerHTML = ''
    document.querySelector('#one').innerHTML = ''
    document.querySelector('#two').innerHTML = ''
    document.querySelector('#three').innerHTML = ''
    document.querySelector('#four').innerHTML = ''
    document.querySelector('#five').innerHTML = ''
    document.querySelector('#six').innerHTML = ''
    document.querySelector('#seven').innerHTML = ''
    document.querySelector('#eight').innerHTML = ''

    if (document.querySelector('.message').innerHTML === 'X wins!') { //winner gets second turn during next round
        turn = 'O'
        document.querySelector('.message').innerHTML = "O plays first"
    }

    else if (document.querySelector('.message').innerHTML === 'O wins!') {
        turn = 'X'
        document.querySelector('.message').innerHTML = "X plays first"
    }

    else if (document.querySelector('.message').innerHTML === 'Draw!') { //draw repeats previous turns
        if (turn === 'X') {
            document.querySelector('.message').innerHTML = 'X is now playing'
        }
        else if (turn === 'O') {
            document.querySelector('.message').innerHTML = 'O is now playing'
        }
    }

    else {
        switchTurn() //a reset before game finishes changes the turn
    }

    history = [] // clear history after reset
    arrayPositionCounter = 0
    moveHistory() //records empty state of board

    // remove next & previous buttons on reset
    document.querySelector('.next').style.display = 'none'
    document.querySelector('.previous').style.display = 'none'

    sfx.button.play()
})

// next button
document.querySelector('.next').addEventListener('click', () => {
    if ( history[history.length - 1 + arrayPositionCounter] === history[history.length - 1]) {
        document.querySelector('.next').style.display = 'none'
    }

    else {
        arrayPositionCounter = arrayPositionCounter + 1
        history[history.length - 1 + arrayPositionCounter].forEach((item, index)=> {
            if (item === '-') {
                document.querySelector(`#${array[index]}`).innerHTML = ' '
            }
            else {
                document.querySelector(`#${array[index]}`).innerHTML = item
            }
        })
    }

    document.querySelector('.previous').style.display = 'block'
    sfx.button.play()
})

// previous button
document.querySelector('.previous').addEventListener('click', () => {
    if ( history[history.length - 1 + arrayPositionCounter] === history[0]) {
        document.querySelector('.previous').style.display = 'none'
    }

    else {
        arrayPositionCounter = arrayPositionCounter - 1
        history[history.length - 1 + arrayPositionCounter].forEach((item, index)=> {
            if (item === '-') {
                document.querySelector(`#${array[index]}`).innerHTML = ' '
            }
            else {
                document.querySelector(`#${array[index]}`).innerHTML = item
            }
        })
    }

    document.querySelector('.next').style.display = 'block'
    sfx.button.play()
})
