const db = require('../../config/dbconfig.js');
const Shows = db.shows;

exports.seed = () => {
	Shows.create({
		title: "Boruto First Generation",
    description:"test 01",
    profileImage: "Test 01",
    isSeries: 1
	});

  Shows.create({
		title: "Naruto First Generation",
    description:"test 01",
    profileImage: "Test 01",
    isSeries: 1
	});

  Shows.create({
		title: "Shield Hero",
    description:"test 01",
    profileImage: "Test 01",
    isSeries: 1
	});
}
