let mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
let chat = require('./models/chat.js');
main()
    .then(() => {
        console.log("CONNECTION ESTABLISHED");
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}


let userData = [
    {
        from : faker.internet.userName(),
        to : faker.internet.userName(),
        msg : "Good question - I am still trying to figure that out",
        created_at : new Date
    },
    {
        from : faker.internet.userName(),
        to : faker.internet.userName(),
        msg : "I work in an office",
        created_at : new Date
    }, 
    {
        from : faker.internet.userName(),
        to : faker.internet.userName(),
        msg : "I do NOT work in an office",
        created_at : new Date
    },
    {
        from : faker.internet.userName(),
        to : faker.internet.userName(),
        msg : "Full time student and rockin' it!",
        created_at : new Date
    }
]

chat.insertMany(userData);