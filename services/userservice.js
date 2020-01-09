var User=require('../models/user')

 exports.saveUser=function(userdata,callback){
 var newUser= new User(userdata);
 newUser.save((err,data)=>{
     if(!err){
         console.log("successfully created");
     }
     else{
         console.log("user not created");
     }
     callback(err,data)
 })
}

exports.getUsers=function(callback){
    User.find((err,data)=>{
        if(!err){
            console.log(data);

        }
        else{
            console.log(err);
        }
        callback(err,data);
    })
}

exports.getUserById=function(id,callback){
    User.findOne({'userId':parseInt(id)},(err,data)=>{
        if(!err){
            console.log("User Found");

        }
        else{
            console.log("User Not Found");
        }
        callback(err,data);
    })
}

exports.update=function(id,data,callback){
    User.findOneAndUpdate({'userId':parseInt(id)},data,(err,data)=>{
        if(!err){
            console.log(data);

        }
        else{
            console.log(err);
        }
        callback(err,data);
    })
}

exports.delete=function(id,callback,data){
    User.findOneAndDelete({'userId':parseInt(id)},(err)=>{
        if(!err){
            console.log("deleted Sucessfull");

        }
        else{
            console.log("not deleted");
        }
        callback(err);
    })
}

exports.deleteuser = function(data, callback) {
    console.log('name',data.name)
    User.findOneAndDelete({name:data.name},(err, doc) => {
        if(!err) {
            callback(err,doc);
        }
        else {
            callback(err,doc);
        }
       
    } )
}