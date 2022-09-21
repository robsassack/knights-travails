const possibleMoves = [[2, -1], [2, 1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

function validMove(move) {
  if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
    return false;
  }
  return true;
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
