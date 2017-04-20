// var craving; // variable declaration
// var food = getFood(); // the food variable now equals the returned value of the getFood() function.

// function getFood() {
// 	if(craving === "sweet") {
// 		stringReturned = "Get some ice cream!"
// 	}
// 	if(craving === "savory") {
// 		stringReturned = "Get some tempeh bacon"
// 	}
// 	else {
// 		stringReturned = "I'm not hungry"
// 	}

// 	return stringReturned;
// 	// stringreturned if being set depending on the value returned in setCraving().  The if/else statement is run and stringReturned is to the definition of the if/else statement that returns true.  Then we can return the valse set after we find out which statement is true.  This is done in lieu of returning the value from each block in the if/else statement.
// }

// function setCraving() {
// 	craving = "sweet" // This reassigns the value of var craving and gives it the value returned from the setCraving() function.  This does not define a new variable, it reassigns the value of an already existing variable.
// }

// var photos = [];

// 	function createPhoto(fileName) {
// 		photos.push(fileName);
// 	}

// 	createPhoto("waves.jpg"); // preferred functional method
// 	createPhoto("boardwalk.jpg");

// 	function createImgTag(gallery) {	
// 		for(var i=0; i < gallery.length; i++) {
// 			console.log("The current index is " + i + "." + " The current photo is " + gallery[i] + ".")	
// 		}
// 	}

// createImgTag(photos);

var mountainPhotos = [];
var weddingPhotos = [];
var travelPhotos = [];

createPhoto(mountainPhotos, "hiking.jpg");
createPhoto(mountainPhotos, "glacier.jpg");
createPhoto(mountainPhotos, "vista.jpg");

createPhoto(weddingPhotos, "peaks.jpg");
createPhoto(weddingPhotos, "peaks.jpg");
createPhoto(weddingPhotos, "peaks.jpg");

createPhoto(travelPhotos, "peaks.jpg");
createPhoto(travelPhotos, "peaks.jpg");
createPhoto(travelPhotos, "peaks.jpg");












