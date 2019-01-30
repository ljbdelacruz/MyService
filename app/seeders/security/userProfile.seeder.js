const db = require('../../config/dbconfig.js');
const UserProfile=db.userProfile;
const UserCredentials=db.userCredentials

exports.seed = () => {
	UserProfile.create({
    firstname:"lainel",
    lastname:"dela cruz",
    email:"ljbdelacruz123@gmail.com",
    contactNumber:"09394242879",
    status:1,
	})

  UserCredentials.create({
    user_id:1,
    password: "ljbdelacruz",
    salt: "1ee",
    type: 1
  })
}
