// Exercise One

function Multiplier() {
	this.currentValue = 1;
	this.getCurrentValue = getCurrentValue;
	this.multiply = multiply;
}

var exponential = new Multiplier;

function multiply(number) {
	this.currentValue *= number 
}

function getCurrentValue() {
	return this.currentValue
}

// Exercise Two

function Photo(fileName, location) {
	this.fileName = fileName;
	this.location = location;
}

function Album() {
	this.albumName = albumName;
	this.album = [];
	this.addPhoto = addPhoto;
}

function addPhoto(albumName, location) {
	this.album.push(photo);
}

function photoSearch(index) {

}

var hiking = new Photo("hiking.jpg", "Colorado")
var adventurePhotos = new Album












