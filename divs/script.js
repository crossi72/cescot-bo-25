/*
- premendo il pulsante "sfondo rosso", tutti i div con classe "content" devono cambiare lo sfondo in rosso
- premendo il pulsante "sfondo giallo", tutti i div con classe "content" devono cambiare lo sfondo in giallo
*/
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("redButton").addEventListener("click", function() {
		let contentDivs = document.getElementsByClassName("content");
		for (let div of contentDivs) {
			div.style.backgroundColor = "red";
		}
	});
	document.getElementById("yellowButton").addEventListener("click", function() {
		let contentDivs = document.getElementsByClassName("content");
		for (let div of contentDivs) {
			div.style.backgroundColor = "yellow";
		}
	});
});
