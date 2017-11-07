// FIRST SLIDE BLUR TRICK
(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(blur).scrollTop() /10;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));

// SlIDE FOUR ANIMATION
var whichImage = "clear";

function change() {
  var image = document.getElementById('clear');
  if(whichImage == 'clear') {
    image.src = 'blurry.png';
    whichImage = 'blurry';
  }
  else {
    image.src = 'clear.png';
    whichImage = 'clear';
  }
}
setInterval('change()', 1000);
