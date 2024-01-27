let mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
let data = require('./models/data.js');
main()
    .then(() => {
        console.log("CONNECTION ESTABLISHED");
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo')
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

data.insertMany(userData);