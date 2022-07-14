const productDb = require('../../service/databases/mysql/mysql');

productDb.schema.hasTable('product').then(exists => {
    if(!exists){
        return productDb.schema.createTable('product',product => {
            console.log('----**----');
            console.log('Creando tabla Producto');
            product.string('title');
            product.string('thumbnail');
            product.float('price');
        });
    }
});

module.exports = productDb;