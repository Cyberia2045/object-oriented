// var names = ["Joe", "Tracey", "Sameer", "Chris"];

// var instructor = "Chris";

// function instructorCheck() {
// 	for(var i=0; i < names.length; i++) {
// 		if(names[i] === instructor) {
// 			console.log (names[i] + " is the instructor")
// 		}
// 		else {
// 			console.log (names[i] + " is not the instructor.")
// 		}
// 	}
// }

function addChoiceListeners() {
	var choices = document.getElementsByClassName("choice")[0];

	for(let i=0; i < choices.length; i++) {
		choices[i].addEventListener("click", wasClicked)
	}
}

function wasClicked(event) {
	event.target.innerHTML = i + " was clicked!"
}

addChoiceListeners();
