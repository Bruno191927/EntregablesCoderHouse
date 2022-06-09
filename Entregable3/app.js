const express = require('express');
const app = express();
const Contenedor = require('./Contenedor');
const productos = new Contenedor('productos.txt');
const utils = require('./utils/utils');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/productos',async (request,response)=>{
    const productsList = await productos.getAll();
    response.send(productsList);
});

app.get('/productoRandom',async(request,response) => {
    const n = utils.randomNumber(1,3);
    const product = await productos.getById(n);
    response.send(product);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});