
//for audio functions

$(document).ready(function() {

  function play(){
    var audio = document.getElementById("audio");
    audio.play();
  }

  function playMaria(){
    var audioMaria = document.getElementById("audioMaria");
    audioMaria.play();
  }

  //begin animation
var score = 0;

  $("buttontrump").click(function () {
    $(".donaldtrump").animate({"margin-left": 200}, animEnd);
    play();
  });

  function animEnd () {

score++;

// actualizar markup
$("#score").text(score);

    $(".donaldtrump").animate({"margin-left": 0});
  }
});
