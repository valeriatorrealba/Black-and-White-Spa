//importar modulos y crear la instancia de la app express y el puerto
const express = require('express');
const app = express();
const PORT = 3000;
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

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
    const uuid = uuidv4();
    const codigo = uuid.slice(0, 6);
    const imagen = await Jimp.read(urlImagen);
    
    await imagen
        .resize(350, Jimp.AUTO)
        .greyscale()
        .writeAsync(`${codigo}.png`)
    const imagenData = fs.readFileSync(`${codigo}.png`);   
    res.send(imagenData)

});

// app.get("/", async (req, res) =>{
//     const imagen = await Jimp.read("https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-nieve-nevar-paisaje-arena.jpeg")
//     await imagen
//     .resize(250, Jimp.AUTO)
//     .sepia()
//     .writeAsync('img.png')    
//     const imagenData = fs.readFileSync('img.png')    
//     res.send(imagenData)
// })