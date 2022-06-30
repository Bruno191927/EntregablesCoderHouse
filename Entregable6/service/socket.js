const {io} = require('../app');
const storeController = require('../components/store/controller');
const messageController = require('../components/chat/controller');
io.on('connection', async client => {
    const products = await storeController.readProducts();
    const messages = await messageController.readChat();
    client.on('insertProduct',async payload => {
        await storeController.insertProduct(payload);
        const actualProducts = await storeController.readProducts();
        io.emit('populateProducts',actualProducts);
    });

    io.emit('populateProducts',products);

    client.on('insertMessage',async payload => {
        await messageController.insertMessageInChat(payload);
        const actualChat = await messageController.readChat();
        io.emit('populateMessage',actualChat);
    });

    io.emit('populateMessage',messages);
})