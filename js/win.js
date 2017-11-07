let intervalId;

const winner = function(winPlayer){
  let colorChange = function(color){
    $(".winbox").css("background", color)
  }

  sound.seek(166)
  sound.play()
  fatality.play()
  $(".winbox").show();
  $(".message").text(`${winPlayer} WINS!`);


  // setTimeout(colorChange("purple"), 500)
  // setTimeout(colorChange("pink"), 1000)
  // setTimeout(colorChange("green"), 2000)



  const flicker = function() {
    setTimeout(function () {
      $(".winbox").css("background", "white");
    }, 110.25);

    setTimeout(function () {
      $(".message").css("color", "black");
    }, 110.25);

    setTimeout(function () {
      $(".winbox").css("background", "red");
    }, 220.5);

    setTimeout(function () {
      $(".message").css("color", "white");
    }, 220.5);

    setTimeout(function () {
      $(".winbox").css("background", "white");
    }, 330.75);

    setTimeout(function () {
      $(".message").css("color", "black");
    }, 330.75);

    setTimeout(function () {
    $(".winbox").css("background", "pink");
    }, 441);

    setTimeout(function () {
      $(".message").css("color", "white");
    }, 441);

    setTimeout(function () {
      $(".winbox").css("background", "white");
    }, 551.25);

    setTimeout(function () {
      $(".message").css("color", "black");
    }, 551.25);

    setTimeout(function () {
      $(".winbox").css("background", "blue");
    }, 661.5);

    setTimeout(function () {
      $(".message").css("color", "white");
    }, 661.5);

    setTimeout(function () {
      $(".winbox").css("background", "white");
    }, 771.75);

    setTimeout(function () {
      $(".message").css("color", "black");
    }, 771.75);

    setTimeout(function () {
      $(".winbox").css("background", "yellow");
    }, 882);

    setTimeout(function () {
      $(".message").css("color", "white");
    }, 882);

  }

  flicker();
  intervalId = setInterval(flicker, 882);

}
