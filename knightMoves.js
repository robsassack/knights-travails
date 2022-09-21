const possibleMoves = [[2, -1], [2, 1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

function validMove(move) {
  if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
    return false;
  }
  return true;
}

function knightMoves(start, end) {
  let queue = [];
  queue.push(start);
  let visited = Array(8).fill().map(() => Array(8));
  visited[start[0]][start[1]] = 1;
  let moves = Array(8).fill().map(() => Array(8).fill(0));
  while (queue.length > 0) {
    let current = queue.shift();
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(moves[current[0]][current[1]]);
      return moves[current[0]][current[1]];
    }
    for (let i=0; i<possibleMoves.length; i++) {
      let move = [current[0] + possibleMoves[i][0], current[1] + possibleMoves[i][1]];
      if (validMove(move) && !visited[move[0]][move[1]]) {
        visited[move[0]][move[1]] = 1;
        moves[move[0]][move[1]] = moves[current[0]][current[1]] + 1;
        queue.push(move);
      }
    }
  }
}

knightMoves([0,0], [5,5]);
