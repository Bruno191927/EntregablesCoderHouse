const express = require('express');
const app = express();

const server = require('http').createServer(app);
const routes = require('./src/components/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos/',routes);

app.use('/', express.static(`${__dirname}/src/public`));

const port = process.env.PORT || 8080;
server.listen(port,()=>{
    console.log('Api RestFul Ok');
});