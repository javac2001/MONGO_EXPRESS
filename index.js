let express = require('express');
let app = express();
let port = 8080;
let path = require("path");
const methodOverride = require('method-override');

let mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
let data = require('./models/data.js');


// EXPRESS Setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'));
// MongoDB Connection
main()
.then(()=>{
    console.log("CONNECTION ESTABLISHED");
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/demo')
}


// Lising Port
app.listen(port, ()=>{
    console.log(`Lisining port ${port}`)
})
// Root
app.get("/",(req, res)=>{
    res.send("This is ROOT");
})
// Home Route
app.get("/userdata",async (req, res)=>{
    let datas = await data.find();
    res.render("home.ejs",{datas});
})
// Create Route
app.get("/userdata/new",(req, res)=>{
    res.render("create.ejs");
})