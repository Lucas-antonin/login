const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Registro')
const Registro = mongoose.model('registro')
router.get("/", (req,res)=>{
    res.render('login.handlebars')
})
router.post('/register/add', (req,res)=>{
    const newusers = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    new Registro(newusers).save().then(()=>{
        console.log('Dados salvos com sucesso!')
    }).cath((err)=>{
        console.log('Erro ao salvar dados: '+ err)
    })
})

module.exports = router