let intervalId;

const winner = function(winPlayer){

  sound.seek(166)
  sound.play()
  fatality.play()
  $(".winbox").show();
  $(".message").text(`${winPlayer} WINS!`);

  let colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]


  const flicker = function() {
    let color = Math.floor(Math.random()*colors.length)

    setTimeout(function () {
      $(".winbox").css("background", "white");
    }, 110.25);

    setTimeout(function () {
      $(".message").css("color", "black");
    }, 110.25);

    setTimeout(function () {
      $(".winbox").css("background", colors[color]);
    }, 220.5);

    setTimeout(function () {
      $(".message").css("color", "white");
    }, 220.5);

  }

  flicker();
  intervalId = setInterval(flicker, 220.5);

}
