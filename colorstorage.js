
function myFunction() {
		
		var x = document.getElementById("myColor").value;
		document.getElementById("demo").innerHTML = x;
		document.body.style.backgroundColor = x;
		localStorage.bgColor = x;
			}
    
function init () {

if (localStorage.bgColor.length !== 0) {
		document.body.style.backgroundColor = localStorage.bgColor;
}
}


