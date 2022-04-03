
function flip(event) {
  var element = event.currentTarget;
  if (document.getElementsByClassName('card')[0].classList.contains('flip')) 
    document.getElementsByClassName("card")[0].classList.remove("flip");
  else {
    document.getElementsByClassName("card")[0].classList.add("flip");
  }
};
