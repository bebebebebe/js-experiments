
  var turn = 0;
  var board = [[0,0,0],[0,0,0],[0,0,0]];
  var keep_playing = true;

  function cellClicked(m,n) {
  if (keep_playing) {
    if (board[m][n] == 0) {
      selectedCell = m+"cell"+n;
      canv = document.getElementById(selectedCell);
      context = canv.getContext("2d");
      if (turn%2 == 0) {
        drawX(context);
        board[m][n] = 1;}
      else {
        drawO(context);
        board[m][n] = -1;}
      turn += 1;
      console.log(turn);
    };
    if (winner(board))
      gameOver(turn);
    else if (turn == 9) {
      turn += 1;
      gameOver(turn);
    }
  }
}

function gameOver(turn) {
  message = function(turn) {
    if (turn == 10)
      return "Game Over! It's a Tie.";
    else if (turn%2 == 0)
      return "Game Over! O Wins!";
    else
      return "Game Over! X Wins!";
  }
  elem = document.createElement("div");
  elem.innerHTML = message(turn);
  document.body.insertBefore(elem, document.body.childNodes[0]);
  keep_playing = false;
}

function drawX(context) {
  context.beginPath();
  context.moveTo(10,10);
  context.lineTo(40,40);
  context.moveTo(40,10);
  context.lineTo(10,40);
  context.stroke();
  context.closePath();  
}

function drawO(context) {
  context.beginPath();
  context.arc(25,25,20,0, Math.PI*2, true);
  context.stroke();
  context.closePath();
};

