const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const storeSchema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    thumbnail:{
        type:String
    }
});


module.exports = mongoose.model('Store',storeSchema);