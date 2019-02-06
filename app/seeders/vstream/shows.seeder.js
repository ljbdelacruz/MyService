const db = require('../../config/dbconfig.js');
const Shows = db.shows;
const Genre=db.genre;
const ShowGenre=db.showGenre;
const VideoURL=db.videoURL;


exports.seed = () => {
	Shows.create({
		title: "Boruto First Generation",
    description:"test 01",
    profileImage: "Test 01",
    isSeries: 1
	});
	Shows.create({
		title: "NarutoShippuden",
		description:"test 02",
		profileImage: "Test 02",
		isSeries: 1
	});
	ShowGenre.create({
		shows_id:1,
		genre_id:1,
	})
	Genre.create({
		title:"Horror",
		description:"test description"
	})
	VideoURL.create({
		title:'Episode 1',
		summary:'test01',
		shows_id:1,
		url:"testURL",
		previewImage:"testImage",
		ordinalOrder:1
	})

}
