//importar modulos y crear la instancia de la app express y el puerto
const express = require('express');
const app = express();
const PORT = 3000;
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');

//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`El servidor está inicializado en el puerto ${PORT}`)
})

//Middleware para archivos estáticos:
app.use(express.static("assets"));

//Ruta para la página principal ("/")
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Ruta para procesar imágenes
app.get("/imagen", async(req, res) =>{
    const { urlImagen } = req.query

});










//CON PROMESAS
// app.get("/crear",async(req,res) => {
//     const year = new Date().getFullYear()
//     const mes = new Date().getMonth() +1
//     const dia = new Date().getDate()
//     const fecha = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${year}`
//     const { archivo, contenido } = req.query
    
//     await fs.writeFile(`${archivo}`,`${fecha} \n ${contenido}`)
//     const mensaje = await fs.readFile(`${archivo}`, "utf-8")
//     mensaje
//     ? res.send(`El archivo ${archivo} fue creado con éxito`)
//     : res.status(500).send("Algo salio mal")
// })