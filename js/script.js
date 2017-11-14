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

// CHANGE IMAGE ON SCROLL
var onScrollHandler = function() {
  var newImageUrl = device.png;
  var scrollTop = document.getElementbyId('device').scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
     newImageUrl = "apple.png"
  }
  if (scrollTop > 200) {
     newImageUrl = "blur.png"
  }
  if (scrollTop > 300) {
     device.png = "clear.png"
  }
  document.getElementById("device")device.png = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);
