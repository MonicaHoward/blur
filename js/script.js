(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(blur).scrollTop() /10;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));

var whichImage = "clear";

function change() {
  var image = document.getElementById('clear');
  if(whichImage == 'clear') {
    image.src = 'blur.png';
    whichImage = 'blur';
  }
  else {
    image.src = 'clear.png';
    whichImage = 'clear';
  }
}

setInterval('change()', 1000);
