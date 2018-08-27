var countDownDate = new Date("Feb 5, 2019 15:37:25").getTime();
var x = setInterval(function() {
 var now = new Date().getTime();
 var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);