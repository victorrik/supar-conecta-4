//@ts-check
/**
 * @typedef {Array<Array<number>>} Board
 *
 * */

/**
 *
 * @param {Board} board
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export const checkWinner = (board, x, y) =>
  checkX(board, y) || checkY(board, x, y) || checkXYReverse(board, x, y) || checkXYFoward(board, x, y);

/**
 * Checa si hay linea en el eje x
 * @param {Board} board
 * @param {number} y
 * @returns {boolean}
 */
const checkX = (board, y) => {
  //console.log("checkX");
  const xLength = board[0].length;
  let player = 0,
    count = 1;
  for (let i = 0; i < xLength; i++) {
    if (count < 2 && i >= xLength - 2) {
      return false;
    }
    if (player && player === board[y][i]) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      player = board[y][i];
      count = 1;
    }
  }
  return false;
};
/**
 * Checa si hay linea en el eje y
 * @param {Board} board
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
const checkY = (board, x, y) => {
  //console.log("checkY");
  const yLength = board.length - 1;
  let count = 1,
    player = 0;
  if (y > 2) {
    return false;
  }
  for (let i = yLength; i >= 0; i--) {
    if (player === board[i][x]) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      player = board[i][x];
      count = 1;
    }
  }
  return false;
};

/**
 * Checa si gano de manera vertical
 * @param {Board} board
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
const checkXYReverse = (board, x, y) => {
  //console.log("checkXYReverse");
  const yLength = board.length,
		auxList = [];
  let count = 1,
    player = 0,
		auxX = x;
		
	for (let i = y; i < yLength; i++) {
		if (board[i][auxX] === undefined) { break }
		auxList.push(board[i][auxX])
		auxX++
	}
	auxX = x;
	for (let i = (y-1); i >= 0; i--) { 
		auxX--
		if (board[i][auxX] === undefined) { break }
		auxList.unshift(board[i][auxX])
	}
	if (auxList.length < 4) { return false }

	for (let i = 0; i < auxList.length; i++) {
    if (player && player === auxList[i]) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      player = auxList[i];
      count = 1;
    }
	}
	return false
};


/**
 * Checa si gano de manera vertical
 * @param {Board} board
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
const checkXYFoward = (board, x, y) => {
  //console.log("checkXYFoward");
  const yLength = board.length,
		auxList = [];
  let count = 1,
    player = 0,
		auxX = x;
		
	for (let i = y; i < yLength; i++) {
		if (board[i][auxX] === undefined) { break }
		auxList.unshift(board[i][auxX])
		auxX--
	}
	auxX = x;
	for (let i = (y-1); i >= 0; i--) { 
		auxX++
		if (board[i][auxX] === undefined) { break }
		auxList.push(board[i][auxX])
	}
	if (auxList.length < 4) { return false }

	for (let i = 0; i < auxList.length; i++) {
    if (player && player === auxList[i]) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      player = auxList[i];
      count = 1;
    }
	}
	return false
};