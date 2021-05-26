var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";/*nothing will be shown on display*/
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex-1].style.display = "inline";/*something will be displayed*/
  setTimeout(carousel, 2000);
}



button.onclick = function() {
  buy.style.display = "block";
}
