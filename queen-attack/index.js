let GRID_SIZE = 8
let QUEEN = [5, 4] // [1, 1] ... [GRID_SIZE - 1, GRID_SIZE - 1]
const INITIAL_OBSTACLES = [[5, 3], [5, 5], [3, 6]]

// create set from obstacles array for easier search
let OBSTACLES = new Set(INITIAL_OBSTACLES.map(([i, j]) => `${i}-${j}`))
let attacks = 0

// i - horizontal
// j - vertical
// 0 - rest, 1 - active, 2 - queen, 3 - obstacle

function createMatrix() {
  //create array of columns
  let arr = []
  for (let i = 0; i < GRID_SIZE; i++) {
    let collumn = []
    for (let j = 0; j < GRID_SIZE; j++) {
      collumn.push(0)
    }
    arr.push(collumn)
  }

  // resolve diagonals, horizontals and verticals
  const dirs = [
    [0, 1], [0, -1], [1, 0], [-1, 0],   // straight
    [1, 1], [-1, -1], [1, -1], [-1, 1]  // diagonal
  ]

  for (const [di, dj] of dirs) {
    let i = QUEEN[0] - 1 + di
    let j = QUEEN[1] - 1 + dj

    while (i >= 0 && i < GRID_SIZE && j >= 0 && j < GRID_SIZE && !OBSTACLES.has(`${i + 1}-${j + 1}`)) {
      arr[i][j] = 1
      i += di
      j += dj
      attacks++
    }
  }

  // set queen
  arr[QUEEN[0] - 1][QUEEN[1] - 1] = 2

  // highlight obstacles
  OBSTACLES.forEach((obstacle) => {
    const i = +obstacle.split('-')[0] 
    const j = +obstacle.split('-')[1]
    arr[i - 1][j - 1] = 3
  })

  return arr
}

// draw chess
const grid = document.querySelector('.grid')
const number = document.querySelector('.result-number')

function drawChess() {
  // reset
  grid.innerHTML = ''
  attacks = 0

  const arr = createMatrix()
  number.innerText = attacks

  for (let i = 0; i < arr.length; i++) {
    const col = document.createElement('DIV')
    col.classList.add('grid-col')

    for (let j = 0; j < arr[i].length; j++) {
      const elem = document.createElement('DIV')
      elem.classList.add('grid-col-elem')
      elem.setAttribute('data-index', `${i}-${j}`)

      if (arr[i][j] === 1) {
        elem.classList.add('active')
      }
      if (arr[i][j] === 2) {
        elem.classList.add('queen')
      }
      if (arr[i][j] === 3) {
        elem.classList.add('obstacle')
      }
      col.appendChild(elem)
    }
    grid.appendChild(col)
  }
}

// controls
let isObstacleMode = false

function clearObstacles() {
  OBSTACLES.clear()
  drawChess()
}

function changeObstacles() {
  isObstacleMode = !isObstacleMode
}

// handle click
function handleClick(e) {
  const clickedPosition = e.target.dataset.index
  if (!clickedPosition) return
  e.stopPropagation()

  let i = +clickedPosition.split('-')[0] + 1
  let j = +clickedPosition.split('-')[1] + 1

  if (isObstacleMode) {
    if (e.target.classList.contains('queen')) return
    if (e.target.classList.contains('obstacle')) {
      OBSTACLES.delete(`${i}-${j}`)
    } else {
      OBSTACLES.add(`${i}-${j}`)
    }
  } else {
    if (e.target.classList.contains('obstacle')) return
    QUEEN = [i, j]
  }
  drawChess()
}

grid.addEventListener('click', handleClick)

// execute
drawChess()
