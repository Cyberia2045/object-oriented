// Exercise One

// function Multiplier() {
// 	this.currentValue = 1;
// 	this.getCurrentValue = getCurrentValue;
// 	this.multiply = multiply;
// }

// var exponential = new Multiplier;

// function multiply(number) {
// 	this.currentValue *= number 
// }

// function getCurrentValue() {
// 	return this.currentValue
// }

// Exercise Two

// function Photo(fileName, category) {
// 	this.fileName = fileName;
// 	this.category = category;
// }

// function Album(albumName) {
// 	this.album = [];
// 	this.albumName = albumName;
// 	this.addPhoto = addPhoto;
// }

// function addPhoto(photo) {
// 	this.album.push(photo);
// } 

// function albumList(philly) {
// 	console.log(philly);
// 	for (var i=0; i < philly.length; i++) {
// 		console.log("Photo " + i + ": " + philly[i].category);
// 	}
// }

// var colorado = new Photo("colorado.jpg", "hiking");
// var wyoming = new Photo("tetons.jpg", "hiking");
// var vermont = new Photo("jay-peak.jpg", "hiking";)
// var hikingPhotos = new Album("hikingPhotos");

// Exercise Three

function Person(fName, lName, neighborhood, age) {
	this.fName = fName;
	this.lName = lName;
	this.neighborhood = neighborhood;
	this.age = age;
}

function Student(fName, lName, neighborhood, age, university, subject) {
	Person.apply(this, arguments);
	this.university = university;
	this.subject = subject;
}

function Teacher() {
	Student.apply(this, arguments);
}

var sam = new Student("Sam", "Almeida", "Wilmington", "32", "Wagner", "Poli Sci");

























