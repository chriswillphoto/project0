let remaining = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

let xTurn = true;
let xWin = false;
let oWin = false;
let draw = false;
let turns = 0;
let player1Score = 0;
let player2Score = 0;
let aiEasy = false;

let sound = new Howl({
  src: ["sandstorm.mp3"],
  volume: 0.7
});

let fatality = new Howl({
  src: ["fatality.mp3"],
  volume: 1
});


const drawCheck = function(){
  if(turns > 8 && !oWin && !xWin){
    return true;
  }else{
    return false;
  };
};

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
    draw = true;
  };

  if(xWin){
    $(".message").text("X Wins");
    player1Score += 1;
    // $(".reset").show();
    $("#1score").text(player1Score);
    winner("PLAYER 1")
  }else if(oWin){
    $(".message").text("O Wins");
    player2Score += 1;
    $("#2score").text(player2Score);
    if(aiEasy){
      winner("COMPUTER")
    }else{
      winner("PLAYER 2")
    }
  }else if(draw){
    $(".message").text("DRAW");
    winner("NOBODY")
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
  $(".message").text("");
  $(".winbox").hide();
  sound.stop();
  clearInterval(intervalId);
  remaining = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];
};




$(document).ready(function(){

    $(".square").on("click", function(){
      // AI EASY
      if(aiEasy){
        if(!xWin && !oWin){
          turns += 2;
          if(remaining.includes( $(this).attr("id") )){
            $(`#${remaining.splice(remaining.indexOf($(this).attr("id")), 1)[0]}`).addClass("x");
            winChecker();
            if(!xWin && !draw){
              setTimeout(function(){
                $(`#${remaining.splice(Math.floor(Math.random()*remaining.length), 1)[0]}`).addClass("o");
                winChecker();
                }, 500)
              }
            };
          };
        }else{ // < ------- end of AiEasy

        if(!xWin && ! oWin){
          turns += 1;
          if(xTurn){
            if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
              $(this).addClass("x");
              xTurn = false;;
              winChecker();
              };
            }else{ //oTurn
            if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
              $(this).addClass("o");
              xTurn = true;
              winChecker();
              };
            }// < ----------- else oTurn
          }; // <-------- if no one has won
        };
      }); // < --------- on click

    $(".reset").on("click", reset);

    $(".button").on("click", function(){
      if($(this).text() === "vs: Player"){
        aiEasy = true;
        $(this).text("vs: AI - Easy");
        $("#player2").text("Computer");
        reset();

      }else{
        aiEasy = false;
        $(this).text("vs: Player");
        $("#player2").text("Player 2");
        reset();
      };


    });
}); // <---------- Document ready
