let gameboard = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];
let remaining = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

let xTurn = true;
let turns = 0;
let player1Score = 0;
let player2Score = 0;
let gameMode = 1 // 1 = pvp, 2=aiEasy, 3=aiHard
let huPlayer = "x"
let aiPlayer = "o"

let sound = new Howl({
  src: ["audio/sandstorm.mp3"],
  volume: 0.7,
  preload: true
});

let fatality = new Howl({
  src: ["audio/fatality.mp3"],
  volume: 1,
  preload: true
});


const drawCheck = function(){
  if(turns > 8 && (!winChecker("x")) && (!winChecker("o"))) {
    return true;
  }else{
    return false;
  };
};

const winbox = function (){
  if(winChecker("x")){
    $(".message").text("X Wins");
    player1Score += 1;
    $("#1score").text(player1Score);
    winner("PLAYER 1")
  }else if(winChecker("o")){
    $(".message").text("O Wins");
    player2Score += 1;
    $("#2score").text(player2Score);
    if(gameMode === 2){
      winner("COMPUTER")
    }else{
      winner("PLAYER 2")
      }
  }else if(drawCheck()){
    $(".message").text("DRAW");
    winner("NOBODY");
    };
  }

const winChecker = function(player){

  if( $("#s1").hasClass(player) && $("#s2").hasClass(player) && $("#s3").hasClass(player)  ||
      $("#s4").hasClass(player) && $("#s5").hasClass(player) && $("#s6").hasClass(player)  ||
      $("#s7").hasClass(player) && $("#s8").hasClass(player) && $("#s9").hasClass(player)  ||
      $("#s1").hasClass(player) && $("#s5").hasClass(player) && $("#s9").hasClass(player)  ||
      $("#s3").hasClass(player) && $("#s5").hasClass(player) && $("#s7").hasClass(player)  ||
      $("#s1").hasClass(player) && $("#s4").hasClass(player) && $("#s7").hasClass(player)  ||
      $("#s2").hasClass(player) && $("#s5").hasClass(player) && $("#s8").hasClass(player)  ||
      $("#s3").hasClass(player) && $("#s6").hasClass(player) && $("#s9").hasClass(player) ) {
      return true
    }else{
      return false
    }
  };





const reset = function(){
  $(".x").removeClass("x")
  $(".o").removeClass("o")
  xTurn = true;
  turns = 0;
  $(".winbox").hide();
  sound.stop();
  clearInterval(intervalId);
  remaining = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];
};

const scoreReset = function() {
  $("#1score").text("0")
  player1Score = 0
  $("#2score").text("0")
  player2Score = 0
  turns = 0
}




$(document).ready(function(){

    $(".square").on("click", function(){
      // AI EASY
      if(gameMode === 2){
        if(!winChecker("x") && !winChecker("o")){
          turns += 2;
          if(remaining.includes( $(this).attr("id") )){
            $(`#${remaining.splice(remaining.indexOf($(this).attr("id")), 1)[0]}`).addClass("x");
            winbox();
            if(!winChecker("x") && !drawCheck()){ // If x hasn't won
              setTimeout(function(){
                $(`#${remaining.splice(Math.floor(Math.random()*remaining.length), 1)[0]}`).addClass("o");
              winbox();
                }, 500);
              };  // <------- if x hasnt won o gets to go
            };  // <-------- if spot still in array
          };
        }else if (gameMode === 3) {
          if(!winChecker("x") && !winChecker("o")){
            turns += 2;
            if(remaining.includes( $(this).attr("id") )) {
              $(`#${remaining.splice(remaining.indexOf($(this).attr("id")), 1)[0]}`).addClass("x");
              gameboard[gameboard.indexOf($(this).attr("id"))] = "x"
              winbox();
              if(!winChecker("x") && !drawCheck()) {
              setTimeout(function(){
                medium();
                winbox();
                }, 500);
              }
            }

        }
        }else{ // < ------- end of AiEasy

          if(!winChecker("x") && !winChecker("o")){
            turns += 1;
            if(xTurn){
              if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
                $(this).addClass("x");
                xTurn = false;
                winbox();
                };
              }else{ //oTurn
              if( !$(this).hasClass("x") && !$(this).hasClass("o") ){
                $(this).addClass("o");
                xTurn = true;
                winbox();
                };
              }// < ----------- else oTurn
            }; // <-------- if no one has won
          };
      }); // < --------- on click

    $(".reset").on("click", reset);

    $(".button").on("click", function(){
      if(gameMode === 1){
        gameMode = 2;
        $(this).text("vs: AI - Easy");
        $(".button").css("background", "purple")
        $("#player2").text("Computer");
        scoreReset();
        reset();

      }else if(gameMode === 2){
        gameMode = 3;
        $(this).text("vs: AI - Hard");
        $("#player2").text("Computer");
        $(".button").css("background", "indigo");
        scoreReset();
        reset();
      }else{
        gameMode = 1;
        $(this).text("vs: Player");
        $("#player2").text("Player 2");
        $(".button").css("background", "skyblue")
        scoreReset();
        reset();
      };


    });
}); // <---------- Document ready
