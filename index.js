let mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
let chat = require('./models/chat.js');
main()
.then(()=>{
    console.log("CONNECTION ESTABLISHED");
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}