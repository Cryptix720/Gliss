var i = 0;
var txt = 'Loading............................................................'; /* Your text */
var load = 'Loading'
var speed = 50; 
var hotText = 'MIT';
var logo = '<i class="fas fa-pen"></i>'
var URL = 'http://opensource.org/licenses/mit-license.php/';
function typeWriter(e) {
  if (i < txt.length) {
    document.getElementById('auto').innerHTML += txt.charAt(i);

    i++;
    setTimeout(typeWriter, speed);
  }
   else if (i < load.length) {
    document.getElementById('auto').innerHTML += load.match(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
document.getElementById('auto').innerHTML = 'Gliss by Chris Pro' + logo.link() + 'The source code is licensed ' + hotText.link(URL);

 }
}
