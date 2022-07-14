const Chat = require('./model');
const Utils = require('../../utils/utils');
exports.insertMessageInChat = async(data) => {
    const newMessage = await Chat('chat').insert({email:data.email,message:data.message,createdAt:Utils.convertDate()})
    if(newMessage){
        return true;
    }
    else{
        return false;
    }
}

exports.selectMessagesInChat = async() => {
    const chatsInfo = await Chat.from('chat').select("*");
    return chatsInfo;
}
