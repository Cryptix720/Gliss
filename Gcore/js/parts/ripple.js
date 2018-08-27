window.addEventListener("load", function()
{
 var nodes = document.querySelectorAll(".ripple");
 for(var i=0; i<nodes.length; i++){
 var letters = nodes[i].innerText.
split('').join('<span></span>');
 letters = letters.split(' ').
join('&nbsp;');
 nodes[i].innerHTML = "<span>"+letters+"</span>";
var children = nodes[i].childNodes;
for(var n=0; n<children.length; n++){
 children[n].style.animationDelay =
(n/10)+"s";
}

 }
});
