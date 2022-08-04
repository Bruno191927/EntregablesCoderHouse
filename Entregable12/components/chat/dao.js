const Chat = require('./model');
const Utils = require('../../utils/utils');
exports.insertMessageInChat = async(data) => {
    const newMessage = await Chat.create({email:data.email,message:data.message,createdAt:Utils.convertDate()});
    if(newMessage){
        return true;
    }
    else{
        return false;
    }
}

exports.selectMessagesInChat = async() => {
    const chatsInfo = await Chat.find();
    return chatsInfo;
}
