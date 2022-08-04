const { response } = require('express');
const productDao = require('./dao');
const productDto = require('./dto');
exports.readProducts = async() => {
    const products = await productDao.findProducts();
    return productDto.productList(products);
}

exports.insertProduct = async(data) => {
    const newProduct = await productDao.insertProducts(data);
    if(newProduct){
        return true;
    }
    else{
        return false;
    }
}

exports.viewData = async(request,response) => {
    const products = await productDao.findFakeProducts();
    return response.render('productfake/productfake',{
        data:products
    })
}