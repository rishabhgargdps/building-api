const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
    _id : String,
    title : {type:String,required:true},
    body : {type:String,required:true},
    preference : String,
    created : Date,
    lastUpdated : Date
});

module.exports = mongoose.model('ToDo',ToDoSchema);