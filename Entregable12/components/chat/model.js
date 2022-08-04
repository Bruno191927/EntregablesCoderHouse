const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatSchema = new mongoose.Schema({
    email:{
        type:String
    },
    message:{
        type:String
    },
    createdAt:{
        type:String
    }
});


module.exports = mongoose.model('Chat',chatSchema);

/*const chatDb = require('../../service/databases/sqlite/sqlite');

chatDb.schema.hasTable('chat').then(exists => {
    if(!exists){
        return chatDb.schema.createTable('chat',chat => {
            console.log('----**----');
            console.log('Creando tabla Chat');
            chat.string('email');
            chat.string('message');
            chat.string('createdAt');
        });
    }
});

module.exports = chatDb;*/