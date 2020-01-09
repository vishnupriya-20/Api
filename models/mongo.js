var mongoose=require('mongoose')
var autoIncrement=require('mongoose-auto-increment')
var process=require('process')
var config=require('../config/mongoconfig.json')
var dbURI=config.url;
var dbOptions=config.options;
console.log(dbURI);
mongoose.connect(dbURI, dbOptions);

mongoose.connection.on('connected',()=>{
    console.log("sucessfully connected");
});

mongoose.connection.on('error',(err)=>{
    console.log("error");
});

mongoose.connection.on('disconnected',()=>{
    console.log("disconnected");
});

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log("db closed");
        process.exit(0);
    });
});

autoIncrement.initialize(mongoose.connection);

module.exports=mongoose;
