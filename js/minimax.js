// the main minimax function
function minimax(newBoard, player){

  function emptyIndexies(board){
    return  board.filter(s => s != "O" && s != "X");
  }
  //available spots
  var availSpots = emptyIndexies(newBoard);
  // checks for the terminal states such as win, lose, and tie
  //and returning a value accordingly
  if (winChecker(huPlayer)){
     return {score:-10};
  }
	else if (winChecker(aiPlayer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++){
    //create an object for each and store the index of that spot
    var move = {};
  	move.index = newBoard[newBoard.indexOf(availSpots[i])];

    // set the empty spot to the current player
    newBoard[newBoard.indexOf(availSpots[i])] = player;

    /*collect the score resulted from calling minimax
      on the opponent of the current player*/
    if (player == aiPlayer){
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else{
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    // reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if(player === aiPlayer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{

// else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

// return the chosen move (object) from the moves array
  return moves[bestMove];
}
