function setBackground () {				
	var x = document.getElementById("myColor").value;
	localStorage.bgColor = x;
	document.body.style.backgroundColor = x;
	document.getElementById("foo").innerHTML = x;
	

				
};

document.getElementById("myBtn").setAttribute( "onclick", "setBackground()");	
				
function loadBackground () {
	if (localStorage.bgColor.length !== 0) {
		document.body.style.backgroundColor = localStorage.bgColor;
		document.getElementById("myColor").value = localStorage.bgColor;

	}
};



	