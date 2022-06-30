const socket = io();

const productsDiv = document.getElementById('products');

socket.on('populateProducts', payload => {
    populateProducts(payload);
});

const populateProducts = async(payload) => {
    const template = await fetch('./card.hbs');
    const templateStr = await template.text();

    if(payload.length > 0){
        productsDiv.innerHTML = "";
        payload.forEach(product => {
            const cardTemplate = Handlebars.compile(templateStr);
            const filled = cardTemplate(product);
            productsDiv.innerHTML += filled;
        });
    }
}