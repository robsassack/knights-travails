function validMove(move) {
  if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
    return false;
  }
  return true;
}

function knightMoves(start, end) {
  let board = Array(8).fill().map(() => Array(8).fill('0'));
}

console.log(knightMoves([3, 3], [4, 3]));
