const express = require('express');
const app = express();
const routes = require('./components/product/routes');
const ejs = require('ejs');
const path = require('path');
//habilitar pug
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.engine('html',ejs.renderFile);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);

const port = 3000;



app.listen(port,()=>{
    console.log(`Api Rest Ok | Port ${port}`);
});