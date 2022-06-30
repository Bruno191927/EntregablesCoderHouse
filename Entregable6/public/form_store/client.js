let socket = io();

const form = document.querySelector('#form-product');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const thumbnailInput = document.querySelector('#thumbnail');

form.addEventListener('submit', event => {
    event.preventDefault();
    sendProduct();
});


function sendProduct() {
    console.log('Ingreso')
    try {
        const title = titleInput.value
        const price = priceInput.value
        const thumbnail = thumbnailInput.value
    
        console.log('Entregado');
    } catch(error) {
        console.log(error);
    }
}