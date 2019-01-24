class UserModel{
    constructor(id, email, password, firstname, lastname, profilePhoto){
        this.id=id;
        this.email=email;
        this.password=password;
        this.firstname=firstname;
        this.lastname=lastname;
        this.profilePhoto=profilePhoto;
    }
    stringify(){
        return stringify(self);
    }
    toObject(object){
        this.id=object.id;
        this.email=object.email;
        this.password=object.password;
        this.firstname=object.firstname;
        this.lastname=object.lastname;
        this.profilePhoto=object.profilePhoto;
    }
}
module.exports=new UserModel();


