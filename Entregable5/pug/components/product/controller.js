const Product = require('./model');

const products = new Product();

exports.createProduct = async(request,response) => {
    const productData = request.body;
    const newProduct = products.createProduct(productData);
    if(newProduct){
        return response.redirect('/');
    }
    else{
        return response.status(400).send('Ocurrio un error al crear el producto');
    }
}

exports.findProducts = async(request,response) => {
    const productList = products.getProducts();
    return response.render('product/get_products',{
        nombre:'Ver Productos',
        data:productList
    });
    //return response.send(productList);
}

exports.formProduct = async(request,response) => {
    return response.render('product/create_product',{
        nombre:'Crear Producto'
    });
}

/*exports.findProductById = async(request,response) => {
    const id = request.params.id;
    const selectProduct = products.getProductById(id);
    if(selectProduct){
        return response.send(selectProduct);
    }
    else{
        return response.status(404).json({
            error: 'Producto no encontrado'
        });
    }
}

exports.updateProduct = async(request,response) => {
    const id = request.params.id;
    const productData = request.body;
    const updateProduct = products.updateProduct(id,productData);
    if(updateProduct){
        return response.send('El producto se actualizo correctamente');
    }
    else{
        return response.status(404).json({
            error: 'Producto no encontrado'
        });
    }
}

exports.deleteProduct = async(request,response) => {
    const id = request.params.id;
    const productData = request.body;
    const deleteProduct = products.deleteProduct(id,productData);
    if(deleteProduct){
        return response.send('El producto se elimino correctamente');
    }
    else{
        return response.status(404).json({
            error: 'Producto no encontrado'
        });
    }
}*/