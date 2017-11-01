(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(blur).scrollTop() /10;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));

var whichImage = "c";

function change() {
  var image = document.getElementById('clear');
  if(whichImage == 'clear') {
    image.src = 'blurry.png';
    whichImage = 'b';
  }
  else {
    image.src = 'clear.png';
    whichImage = 'c';
  }
}

setInterval('change()', 1000);
