const express = require('express');
const app = express();
const routes = require('./components/product/routes');
//habilitar pug
app.set('view engine','pug')
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);

const port = 3000;



app.listen(port,()=>{
    console.log(`Api Rest Ok | Port ${port}`);
});