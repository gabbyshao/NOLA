$(document).ready(function(){

    var audioElement = document.createElement('audio');
              audioElement.setAttribute('src', '26/2601Infrontofdumond.mp3');
              $(".orange").mouseenter(function(){
                  audioElement.play();
                  // alert("message?: DOMString");
              });
              $(".orange").mouseleave(function(){
                  audioElement.pause();
                  // alert("message?: DOMString");
              });

  });
