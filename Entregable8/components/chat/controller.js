const chatDao = require('./dao');
const chatDto = require('./dto');
exports.readChat = async() => {
    const chats = await chatDao.selectMessagesInChat();
    return chatDto.messageList(chats);
}


exports.insertMessageInChat = async(data) => {
    const newProduct = await chatDao.insertMessageInChat(data);
    if(newProduct){
        return true;
    }
    else{
        return false;
    }
}