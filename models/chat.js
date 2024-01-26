let mongoose = require('mongoose');

let whatsappSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,
        maxLength : 30
    },
    to : {
        type : String,
        required : true,
        maxLength : 30
    },
    msg : {
        type : String,
        maxLength : 100
    },
    created_at : {
        type : Date,
        required : true
    }
});

let chat = mongoose.model("chat",whatsappSchema);
module.exports = chat;