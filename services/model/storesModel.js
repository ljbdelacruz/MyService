class StoreModel{
    constructor(id, name, description, storeLogo, category_id){
        this.id=id;
        this.name=name;
        this.description=description;
        this.storeLogo=storeLogo;
        this.category_id=category_id;
    }
    stringify(){
        return JSON.stringify(self);
    }
    toObject(object){
        this.id=object.id;
        this.name=object.name;
        this.description=object.description;
        this.storeLogo=object.storeLogo;
        this.category_id=object.category_id;
    }
}
module.exports=StoreModel;

