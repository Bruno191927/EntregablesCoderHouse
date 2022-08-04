const express = require('express')
const app = express();
const { engine } = require('express-handlebars');
const http = require('http');
const path = require('path');
const storeController = require('./components/store/controller');
require('./service/databases/mongoDB/mongodb').dbConnection();
require('dotenv').config();
app.engine('hbs',engine({
    extname:'.hbs',
    defaultLayout: path.join(__dirname,'/views/layout/index.hbs'),
}));

const chatPath = path.resolve( __dirname, 'public/chat');
const storePath = path.resolve(__dirname,'public/store');

app.use('/chat',express.static(chatPath));
app.use('/store',express.static(storePath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



const port = process.env.PORT || '8080';
app.set('port', port);
app.set('view engine','.hbs')
app.set('views','./views');
app.get('/api/productos-test',storeController.viewData);
const server = http.createServer(app);
module.exports.io= require('socket.io')(server);

require('./service/socket/socket');
server.listen(port);