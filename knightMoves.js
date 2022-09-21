const possibleMoves = [[2, -1], [2, 1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

function validMove(move) {
  if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
    return false;
  }
  return true;
}

function printBoard(path) {
  let board = Array(8).fill();
  let row = "⬜⬛⬜⬛⬜⬛⬜⬛"
  for (let i = 0; i < board.length; i++) {
    if (i % 2 === 0) {
      board[i] = row;
    } else {
      board[i] = row.split("").reverse().join("");
    }
  }

  let startX = path[0][0];
  let startY = path[0][1];
  board[startX] = board[startX].split("");
  board[startX][startY] = "🐴";
  board[startX] = board[startY].join("");

  for (let i = 1; i < path.length; i++) {
    let x = path[i][0];
    let y = path[i][1];
    board[x] = board[x].split("");
    switch (i) {
      case 1:
        board[x][y] = "1️⃣ ";
        break;
      case 2:
        board[x][y] = "2️⃣ ";
        break;
      case 3:
        board[x][y] = "3️⃣ ";
        break;
      case 4:
        board[x][y] = "4️⃣ ";
        break;
      case 5:
        board[x][y] = "5️⃣ ";
        break;
      case 6:
        board[x][y] = "6️⃣ ";
        break;
      default:
        board[x][y] = "0️⃣ ";
    }
    board[x] = board[x].join("");
  }

  console.log(board.join("\n"));
}

function knightMoves(start, end) {
  let queue = [[start]];
  let board = Array(8).fill().map(() => Array(8).fill(0));
  while (queue) {
    let path = queue.pop();
    let prev = path[path.length - 1];
    if (prev[0] === end[0] && prev[1] === end[1]) {
      console.log(`Number of steps: ${path.length-1}`);
      console.log("Path:")
      path.forEach(step => {
        console.log(step);
      });
      printBoard(path);
      return;
    }
    for (let i = 0; i < possibleMoves.length; i++) {
      let move = [prev[0] + possibleMoves[i][0], prev[1] + possibleMoves[i][1]];
      if (validMove(move) && board[move[0]][move[1]] === 0) {
        board[move[0]][move[1]] = 1;
        queue.unshift([...path, move]);
      }
    }
  }
}

knightMoves([3,3], [4, 3]);
