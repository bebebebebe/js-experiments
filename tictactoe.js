
  function winner(board){
   return rowwin(board) || colwin(board) || diagwin(board);
  }

  function rowwin(board){
    for(i=0; i<board.length; i++){
      var total = board[i].reduce(function(x,y) {
        return x + y;
      });
    if (Math.abs(total) == board.length)
      return true;
    }
    return false;
  }

  function colwin(board){
    return rowwin(invert(board));
  }

  function diagwin(board){
    var diagsum = diagonal(board).reduce(function(x,y){
      return x+y;
    });
    var crossDiagsum = crossDiagonal(board).reduce(function(x,y){
      return x+y;
    });
    return Math.abs(diagsum) == board.length || Math.abs(crossDiagsum) == board.length;
  }

  function invert(matrix){
    return matrix[0].map(function(_,i){
      return matrix.map(function(array){return array[i]});
    });
  }

  function diagonal(matrix){
    return matrix.map(function(row,i){return row[i]});
  }

  function crossDiagonal(matrix){
    return matrix.map(function(row,i){return row[row.length-1-i]});  
  }
