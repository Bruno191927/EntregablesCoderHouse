const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.HOST,{useNewUrlParser: true, useUnifiedTopology: true,retryWrites:true}) // await espera a que se resuelva la instruccion
        .then(()=>{console.log('Connected to mongoose');})
        .catch(err => console.log('Could not connect to mongoose',err));
    }

    catch(error){
        throw new Error('Database Error');
    }
}

module.exports = {
    dbConnection
}