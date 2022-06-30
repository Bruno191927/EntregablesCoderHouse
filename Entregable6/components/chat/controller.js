const fs = require('fs');
const Utils = require('../../utils/utils');
exports.readChat = async() => {
    return new Promise(
        async(resolve,reject) => {
            const data = await fs.promises.readFile('chat.txt','utf-8');
            if(data){
                const chats = JSON.parse(data);
                return resolve(chats);
            }
            else{
                return reject(null);
            }
        }
    );
}


exports.insertMessageInChat = async(data) => {
    return new Promise(
        async(resolve,reject) => {
            try {
                const chatData = await this.readChat();
                data.createdAt = Utils.convertDate();
                chatData.push(data);
                return resolve(true);
            } catch (error) {
                return reject(error);
            }
        }
    );
}