const Product = require('./model');

exports.insertProducts = async(data) => {
    const newProduct = await Product('product').insert({title:data.title,price:Number(data.price),thumbnail:data.thumbnail});
    if(newProduct){
        return true;
    }
    else{
        return false;
    }
}

exports.findProducts = async() => {
    const productsInfo = await Product.select().from('product');
    return productsInfo;
}
