
window.onload = function(){

  var downtownBlur1 = new stackBoxBlurIt('downtownBlur').blurit(40)
  downtownBlur1.onmouseover = function(){
    this.blurit(0, 2000)
  }
  downtownBlur1.onmouseout = function(){
    this.blurit(40, 2000)
  }

}
