cellClicked = function(m,n) {
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
    announceWin(turn);
  else if (turn == 9)
    announceTie();
}

announceWin = function(turn) {
  elem = document.createElement("div");
  if (turn%2 == 1)
    elem.innerHTML = ' Game Over! X Wins! ';
  else
    elem.innerHTML = ' Game Over! O Wins! ';
  document.body.insertBefore(elem, document.body.childNodes[0]);
}

announceTie = function() {
  elem = document.createElement("div");
  elem.innerHTML = " Game Over! It's a tie. ";
  document.body.insertBefore(elem, document.body.childNodes[0]);
}

drawX = function(context) {
  context.beginPath();
  context.moveTo(10,10);
  context.lineTo(40,40);
  context.moveTo(40,10);
  context.lineTo(10,40);
  context.stroke();
  context.closePath();  
}

drawO = function(context) {
  context.beginPath();
  context.arc(25,25,20,0, Math.PI*2, true);
  context.stroke();
  context.closePath();
}

play = function() {
  turn = 0;
  board = [[0,0,0],[0,0,0],[0,0,0]];
}