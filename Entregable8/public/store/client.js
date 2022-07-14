const socket = io();

const productsDiv = document.getElementById('products');

const form = document.getElementById('form-product');
const title = document.getElementById('title');
const price = document.getElementById('price');
const thumbnail = document.getElementById('thumbnail');
const successModal = document.querySelector('.exito');
const errorModal = document.querySelector('.error');
form.addEventListener('submit',sendProduct);


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

async function sendProduct(event) {
    try {
        const titleData = title.value;
        const priceData = price.value;
        const thumbnailData = thumbnail.value;

        if([titleData,priceData,thumbnailData].includes('')){
            errorModal.classList.remove('hidden');
            setTimeout(() => {
                errorModal.classList.add('hidden');
            }, 2000);
        }else{
            let data = {
                title:titleData,
                price:priceData,
                thumbnail:thumbnailData
            }

            socket.emit('insertProduct',data);

            title.value = '';
            price.value = '';
            thumbnail.value = '';

            successModal.classList.remove('hidden');
            setTimeout(() => {
                successModal.classList.add('hidden')
            }, 2000);
        }
    } catch(error) {
        console.log(error);
    }
    event.preventDefault();
}