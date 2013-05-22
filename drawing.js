
contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][0] === obj[0] && a[i][1] === obj[1]) {
            return true;
        }
    }
    return false;
}


cellClicked = function(m,n) {
  if (! contains(usedCells, [m,n])) {
    usedCells.push([m,n]);
    selectedCell = m+"cell"+n;
    canv = document.getElementById(selectedCell);
    context = canv.getContext("2d");
    if (turn%2 == 0)
      drawX(context);
    else
      drawO(context);
    turn += 1;
    console.log(turn);
  }
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















