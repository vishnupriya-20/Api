var mongoose=require('./mongo')
var autoIncrement=require('mongoose-auto-increment')
var Schema=mongoose.Schema;
var User=new Schema({
    userId: Number,
    name: String,
    email: String,
    phone: String
})

User.plugin(autoIncrement.plugin,{
    model:'User',
    field:'userId',
    startAt:1
});

module.exports=mongoose.model('user',User)