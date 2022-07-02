const express = require('express')
const app = express();
const http = require('http');
const path = require('path');
const port = process.env.PORT || '8080';
app.set('port', port);
const chatPath = path.resolve( __dirname, 'public/chat');
const storePath = path.resolve(__dirname,'public/store');
app.use('/chat',express.static(chatPath));
app.use('/store',express.static(storePath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const server = http.createServer(app);
module.exports.io= require('socket.io')(server);

require('./service/socket');
server.listen(port);