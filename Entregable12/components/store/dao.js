const Product = require('./model');
const fakeData = require('@faker-js/faker');
exports.insertProducts = async(data) => {
    const newProduct = await Product.create({title:data.title,price:Number(data.price),thumbnail:data.thumbnail});
    if(newProduct){
        return true;
    }
    else{
        return false;
    }
}

exports.findProducts = async() => {
    const productsInfo = await Product.find();
    return productsInfo;
}

exports.findFakeProducts = async() => {
    let fakeProducts = [];
    for (let index = 0; index < 5; index++) {
        const fakeProduct = {
            title:fakeData.faker.commerce.product(),
            price:fakeData.faker.commerce.price(),
            thumbnail:fakeData.faker.image.image()
        }
        fakeProducts.push(fakeProduct);
    }
    return fakeProducts;
}


