
function myFunction() {
	
	if (localStorage.bgColor.length !== 0) {
		
		document.body.style.backgroundColor = localStorage.bgColor;
		
	}
	
	else {
		
		var x = document.getElementById("myColor").value;
		document.getElementById("demo").innerHTML = x;
		document.body.style.backgroundColor = x;
	}
    

}