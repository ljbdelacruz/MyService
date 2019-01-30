const userCredentials=require('./userCredentials.repo.js')
const userProfile=require('./userProfile.repo.js')
const verificationCode=require('./verificationCode.repo.js')

userCredentials();
userProfile();
verificationCode();

module.exports={
  userCredentials:userCredentials,
  userProfile:userProfile,
  verificationCode:verificationCode
}
