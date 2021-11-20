const express = require('express')
const moment = require('moment')
const fs = require('fs')

const app = express()
const PORT = 3000;
let visitas = 0

try{
    let data = fs.readFileSync("visitas")
    visitas = Number(data)
}catch (err){
    console.log("no file visitas");
}

const server = app.listen(PORT)

//mensaje en caso de error
server.on("error", (error)=>{
    console.log("ocurrio un error con el servidor");
})

app.get('/', (req, res) => {
    //res.render('home')
    res.send({
        nombre: 'Uriel yepez',
        titulo: 'home'
    })
})

app.get('/hola', (req, res) => {
    //res.render('home')
    res.send("Hola a todos")
})

app.get('/visitas', (req, res) => {
    visitas++
    fs.writeFileSync("visitas", visitas.toString())
    res.send(` numero de visitas ${visitas}`)
})

app.get('/fyj', (req, res) => {
    //let now = moment().format("M/D/YYYY H:mm:ss")
    res.send({
        'flh': moment().format("M/D/YYYY H:mm:ss")
    })
})


app.get('*', (req, res) => {
    
    res.send('404 | Pagina no encontrada')
})