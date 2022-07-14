let socket = io();

const form = document.getElementById('form-chat');
const email = document.getElementById('email');
const message = document.getElementById('message');
const modal = document.querySelector('.modal');
const messageDiv = document.getElementById('chat-messages');
form.addEventListener('submit',sendMessage);

function sendMessage(event){
    try {
        const emailData = email.value;
        const messageData = message.value;
        if([emailData,messageData].includes('')){
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 1000);
        }
        else{
            let message = {
                email:emailData,
                message:messageData
            };
            socket.emit('insertMessage',message);
        }
    } catch (error) {
        console.log(error);
    }

    event.preventDefault();
}

socket.on('populateMessage',payload => {
    populateMessages(payload);
})

const populateMessages = async(payload) => {
    const template = await fetch('./message.hbs');
    const templateStr = await template.text();

    if(payload.length > 0){
        messageDiv.innerHTML = "";
        payload.forEach(message => {
            const cardTemplate = Handlebars.compile(templateStr);
            const filled = cardTemplate(message);
            messageDiv.innerHTML += filled;
        });
    }
}