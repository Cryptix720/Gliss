window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.padding = "5px  5px";
    document.getElementById('navbar').style.fontSize = "5px";
	document.getElementById('navbar').style.margin = "20px";
	
  } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
 

	document.getElementById('navbar').style.margin = "20px";
} else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {


	document.getElementById('navbar').style.margin = "20px";
}else {
    document.getElementById('navbar').style.padding = "10px  10px";
    document.getElementById('navbar').style.fontSize = "25px";
	document.getElementById('navbar').style.margin = "10px";
 
  }

}
