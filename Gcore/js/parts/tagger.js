/*Changes every link tag it finds on the page*/
var date = new Date().getTime();
 var links = document.getElementsByTagName('link');
 for (var i=0,j=links.length; i<j; i++)
 { var link = links[i]; link.href += 
 (link.href.indexOf('?') == -1 ? '?' : '&')+date; }
