const message = (data) => ({
    email: data.email,
    message: data.message,
    createdAt: data.createdAt
});

const messageList = (resources) =>resources.map((resource)=>message(resource));

module.exports = {
    message,
    messageList
}