import express from "express";
import routes from './routes/index.js';
import {routeNotFound} from './middleware/index.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',routes);
app.use(routeNotFound);
app.listen('3000',() => {
    console.log('Escuchando');
})