
contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

cellClicked = function(n){
        if (! contains(usedCells,n)) {
          usedCells.push(n);
          selectedCell = "cell"+n;        
          canv = document.getElementById(selectedCell);
          context = canv.getContext("2d");
          if (turn%2 == 0)
            drawX(context);         
          else
            drawO(context);
          turn += 1;
          console.log(turn);
        }
        else if (turn == 9)
          console.log('game over');
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
  usedCells = [];
  turn = 0;
  board = [[0,0,0],[0,0,0],[0,0,0]];
}















