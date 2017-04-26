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

function Person(fName, lName, location, age) {
	this.fName = fName;
	this.lName = lName;
	this.location = location;
	this.age = age;
}

function University(name, location, tuition) {
	this.name = name;
	this.location = location;
	this.tuition = tuition;
}

function Student(fName, lName, neighborhood, age, university, subject) {
	Person.apply(this, arguments);
	this.university = university;
	this.subject = subject;
	this.inState = inState;
}

function Teacher() {
	Student.apply(this, arguments);
}

// students
var sam = new Student("Sam", "Almeida", "Delaware", "32", "Wagner", "Poli Sci");
var mateo = new Student("Matthew", "MacDermant", "Pennsylvania", "30", "Wagner", "History");
var amanda = new Student("Amanda", "Michael", "Pennsylvania", "30", "Villanova", "Psychology");

// teachers
var phillip = new Teacher("Phillip", "Wentworth", "Pennsylvania", "35", "Penn", "Classics");
var sameer = new Teacher("Sameer", "Saxena", "Pennsylvania", "27", "Penn", "Botony");

// universities
var wagner = new University("Wagner", "New York", 40000);
var villanova = new University("Villanova", "Pennsylvania", 35000);
var penn = new University("Penn", "Pennsylvania", 40000);

function studentList(studentArray) {
	for (var i=0; i < studentArray.length; i++) {
		console.log(studentArray[i].fName + " " + studentArray[i].lName + " is a " + studentArray[i].age + " year old student of " + studentArray[i].subject + " at " + studentArray[i].university + ".")
	}
}

function teacherList(teacherArray) {
	for(var i=0; i < teacherArray.length; i++) {
		console.log(teacherArray[i].fName + " " + teacherArray[i].lName + " is a professor of " + teacherArray[i].subject + " at " + teacherArray[i].university + ".")
	}
}






















