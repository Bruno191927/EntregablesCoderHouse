const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const routes = require('./components/product/routes');
const path = require('path');
require('./views/layout')

app.engine('hbs',engine({
    extname:'.hbs',
    defaultLayout: path.join(__dirname,'/views/layout/index.hbs'),
}));
app.set('view engine','.hbs')
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);

const port = 3000;



app.listen(port,()=>{
    console.log(`Api Rest Ok | Port ${port}`);
});