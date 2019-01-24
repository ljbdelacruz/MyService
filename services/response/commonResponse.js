var CommonResponse={
    code:0,
    message:'',
    token:'',
    init:function(code, message, token){
        this.code=code;
        this.message=message;
        this.token=token;
    }
}


module.exports=CommonResponse;


