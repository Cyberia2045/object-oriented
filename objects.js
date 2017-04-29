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

function University(name) {
	this.name = name;
	this.students = [];
	this.teachers = [];
	this.addStudent = addStudent;
	this.addTeacher = addTeacher;
	this.studentList = studentList;
	this.teacherList = teacherList;
}

function Student(fName, lName, neighborhood, age, university, subject) {
	Person.apply(this, arguments);
	this.university = university;
	this.subject = subject;
}

function Teacher() {
	Student.apply(this, arguments);
}

// students
var sam = new Student("Sam", "Almeida", "Delaware", "32", "Wagner", "Poli Sci");
var mateo = new Student("Matthew", "MacDermant", "Pennsylvania", "30", "Wagner", "History");
var amanda = new Student("Amanda", "Michael", "Pennsylvania", "30", "Villanova", "Psychology");

// teachers
var phillip = new Teacher("Phillip", "Wentworth", "Pennsylvania", "35", "Wagner", "Classics");
var sameer = new Teacher("Sameer", "Saxena", "Pennsylvania", "27", "Villanova", "Botony");

// universities
var wagner = new University("Wagner");
var villanova = new University("Villanova");

function studentList() {
	for (var i=0; i < this.students.length; i++) {
		console.log(this.students[i].fName + " " + this.students[i].lName)
	}
}

function teacherList() {
	for(var i=0; i < this.teachers.length; i++) {
		console.log(this.teachers[i].fName + " " + this.teachers[i].lName + " is a professor of " + this.teachers[i].subject + " at " + this.teachers[i].university + ".")
	}
}

function addStudent(student) {
	this.students.push(student);
}

function addTeacher(teacher) {
	this.teachers.push(teacher);
}



















