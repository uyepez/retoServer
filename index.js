const http = require('http')
const moment = require('moment')

const server = http.createServer((request, response) =>{
    const now= new moment()
    console.log('nuevo quest' + now.format('h:mm:ss a'));
    
    //desafio de clase
    
    let fecha = new Date();
    let hora = fecha.getHours();
    let respuesta = "";
    if (hora>=6 && hora<=12) {
        respuesta = "Buenos días"
    } else if (hora >= 13 && hora <= 19) {
        respuesta = "Buenas tardes"
    } else  {
        respuesta = "Buenas noches"
    }
    response.end(`Hola ${respuesta}`)
})

const connect = server.listen(3000, ()=>{
    let port = connect.address().port;
    console.log(`escuchando por puerto ${port}`);
})