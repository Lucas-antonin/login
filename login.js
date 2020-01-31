const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const admin = require('./routes/admin.js')
const path = require('path')
//Config
//Database
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/Registro",{
    useMongoClient: true
}).then(()=>{
    console.log("MongoDB Conectado...")
}).catch((err)=>{
    console.log("Houve um erro ao conectar ao MongoDB: "+ err)
})
//Template Engine
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set("view engine", 'handlebars')
//BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//public
app.use(express.static(path.join(__dirname, 'public')))
//Routes
app.use("/login", admin)
app.get("/register", (req, res)=>{
    res.render('register.handlebars')
})

const Porta =8081
app.listen(Porta, ()=>{
    console.log("Servidor Aberto!")
})
