const userCredentials=require('./userCredentials.repo.js')
const userProfile=require('./userProfile.repo.js')
const verificationCode=require('./verificationCode.repo.js')
const userDevice=require('./userDevice.repo.js');

userCredentials();
userProfile();
verificationCode();
userDevice();

module.exports={
  userCredentials:userCredentials,
  userProfile:userProfile,
  verificationCode:verificationCode,
  userDevice:userDevice
}
