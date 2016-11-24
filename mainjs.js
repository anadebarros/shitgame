
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
$("h2").text(score);

    $(".donaldtrump").animate({"margin-left": 0});
  }

/*
  //meu document

  $("#buttontrump").click(function() {
    $(".donaldtrump").toggleClass("animate");
    play();
    score++;
    drawScore();

  });

  $("#buttonmaria").click(function() {
    $(".mariaputa").toggleClass("animatemaria");
    playMaria();
    score++;
    drawScore();
  });

});
