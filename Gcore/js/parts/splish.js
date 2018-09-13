"use strict";

window.onscroll = function () {
 
};
 splish();
function splish() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = winScroll / height * 100;
  document.getElementById("gl-bar").style.width = scrolled + "%";
}
