window.onscroll = function() {
	scrollFunctionUp();
	}; //Up function

function scrollFunctionUp() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("gl_up").style.display = "block";
    } else {
        document.getElementById("gl_up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {scrollFunctionDown()};//Down function

function scrollFunctionDown() {
    if (document.body.scrollTop > pix || document.documentElement.scrollTop > pix) {
        document.getElementById("gl_down").style.display = "none";
    } else {
        document.getElementById("gl_down").style.display = "block";
    }
}

// When the user clicks on the button, scroll to the bottom of the document
function downFunction() {
	var pix = 9999;
    document.body.scrollTop = pix; // For Safari
    document.documentElement.scrollTop = pix; // For Chrome, Firefox, IE and Opera
}


