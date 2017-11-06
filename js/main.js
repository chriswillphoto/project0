gameboard = ["#s1", "#s2", "#s3", "#s4", "#s5", "#s6", "#s7", "#s8", "#s9"]

let xTurn = true;
let xWin = false;
let oWin = false;
let draw = false;
let turns = 0
let player1Score = 0
let player2Score = 0


const drawCheck = function(){
  if(turns === 9 && !oWin && !xWin){
    return true
  }else{
    return false
  }
}

const winChecker = function(){
  if( $("#s1").hasClass("x") && $("#s2").hasClass("x") && $("#s3").hasClass("x") ){
    xWin = true;
  }else if ( $("#s4").hasClass("x") && $("#s5").hasClass("x") && $("#s6").hasClass("x") ){
    xWin = true;
  }else if ( $("#s7").hasClass("x") && $("#s8").hasClass("x") && $("#s9").hasClass("x") ){
    xWin = true;
  }else if ( $("#s1").hasClass("x") && $("#s5").hasClass("x") && $("#s9").hasClass("x") ){
    xWin = true;
  }else if ( $("#s3").hasClass("x") && $("#s5").hasClass("x") && $("#s7").hasClass("x") ){
    xWin = true;
  }else if ( $("#s1").hasClass("x") && $("#s4").hasClass("x") && $("#s7").hasClass("x") ){
    xWin = true;
  }else if ( $("#s2").hasClass("x") && $("#s5").hasClass("x") && $("#s8").hasClass("x") ){
    xWin = true;
  }else if ( $("#s3").hasClass("x") && $("#s6").hasClass("x") && $("#s9").hasClass("x") ){
    xWin = true;    // x win
  }else if ( $("#s1").hasClass("o") && $("#s2").hasClass("o") && $("#s3").hasClass("o") ){
    oWin = true;
  }else if ( $("#s4").hasClass("o") && $("#s5").hasClass("o") && $("#s6").hasClass("o") ){
    oWin = true;
  }else if ( $("#s7").hasClass("o") && $("#s8").hasClass("o") && $("#s9").hasClass("o") ){
    oWin = true;
  }else if ( $("#s1").hasClass("o") && $("#s5").hasClass("o") && $("#s9").hasClass("o") ){
    oWin = true;
  }else if ( $("#s3").hasClass("o") && $("#s5").hasClass("o") && $("#s7").hasClass("o") ){
    oWin = true;
  }else if ( $("#s1").hasClass("o") && $("#s4").hasClass("o") && $("#s7").hasClass("o") ){
    oWin = true;
  }else if ( $("#s2").hasClass("o") && $("#s5").hasClass("o") && $("#s8").hasClass("o") ){
    oWin = true;
  }else if ( $("#s3").hasClass("o") && $("#s6").hasClass("o") && $("#s9").hasClass("o") ){
    oWin = true;    // o win
  }else if(drawCheck() === true){
    draw = true
  };
  if(xWin){
    $(".message").text("X Wins");
    player1Score += 1;
    $(".reset").show();
    $("#1score").text(player1Score);
  }else if(oWin){
    $(".message").text("O Wins");
    player2Score += 1;
    $(".reset").show();
    $("#2score").text(player2Score);
  }else if(draw){
    $(".message").text("DRAW");
    $(".reset").show();
  };
};


const reset = function(){
  $(".x").removeClass("x")
  $(".o").removeClass("o")
  xTurn = true;
  xWin = false;
  oWin = false;
  draw = false;
  turns = 0;
  $(".reset").hide();
  $(".message").text("");
};




$(document).ready(function(){


    $(".square").on("click", function(){
      if(!xWin && ! oWin){
        turns += 1
        if(xTurn){
          if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
            $(this).addClass("x")
            xTurn = false;
            winChecker();
          };
        }else{
          if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
            $(this).addClass("o");
            xTurn = true;
            winChecker();
          };
        }// < ----------- else oTurn
      }; // <-------- if no one has won
    }); // < --------- on click

    $(".reset").on("click", reset)
}); // <---------- Document ready
