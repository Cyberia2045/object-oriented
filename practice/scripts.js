var shorePhotos = [];
var hikingPhotos = [];

function createPhoto(albumName, fileName) {
	albumName.push(fileName);
} // This function creates an instance of photo. It takes two arguments (albumName, fileName).  After the instance is created, it is then pushed to an array of photos which is stored as a value in an album variable.

createPhoto(shorePhotos, "waves.jpg");
createPhoto(shorePhotos, "boardwalk.jpg");
createPhoto(shorePhotos, "downtown.jpg");

createPhoto(hikingPhotos, "colorado.jpg");
createPhoto(hikingPhotos, "wyoming.jpg");
createPhoto(hikingPhotos, "newMexico.jpg");
// This is calling the createPhotos function and passing a fileName as an argument.  This now creates photos.  Then, the function pushes these newly created photos back up to the photos array where they are held until we call upon them somewhere else in the program. var photos then equals an array with these three photos held as values.

function albumList(gallery) {
	console.log(gallery);
	for (var i=0; i < gallery.length; i++) {
		console.log("Photo " + i + ": " + gallery[i]);
	}
}

// createAlbum(gallery); // createImgTag is holding an array of four values.

// This for loop is running through the array of photos.  gallery[i] is an instance of photo that is stored in an array at a particular index.  This loop is pulling out the values held in the photos array and logging them to the console through the i variable.














