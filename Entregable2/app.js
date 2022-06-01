const Contenedor = require('./Contenedor');

const productos = new Contenedor('productos.txt');

let data1 = {
    title:'Pepsi',
    price:10,
    thumbnail:'https://presto.com.pe/wp-content/uploads/2021/08/gaseosas.jpg'

}
let data2 = {
    title:'Guarana',
    price:10,
    thumbnail:'https://presto.com.pe/wp-content/uploads/2021/08/gaseosas.jpg'

}
let data3 = {
    title:'CocaCola',
    price:10,
    thumbnail:'https://presto.com.pe/wp-content/uploads/2021/08/gaseosas.jpg'

}

async function test() {
    console.log('----------Eliminando todo------------------');
    const del = await productos.deleteAll();
    console.log(del);
    console.log('----------Agregando un producto 1------------------');
    const p1 = await productos.save(data1);
    console.log(p1);
    console.log('----------Agregando un producto 2------------------');
    const p2 = await productos.save(data2);
    console.log(p2);
    console.log('----------Agregando un producto 3------------------');
    const p3 = await productos.save(data3);
    console.log(p3);
    console.log('----------Seleccionando todos los productos------------------');
    const products = await productos.getAll();
    console.log(products);
    console.log('----------Seleccionando un producto------------------');
    const productSelected = await productos.getById(1);
    console.log(productSelected);
    console.log('----------Eliminando un producto------------------');
    const productDelete = await productos.deleteById(1);
    console.log(productDelete);
    console.log('----------Seleccionando todos los productos actuales------------------');
    const actualProducts = await productos.getAll();
    console.log(actualProducts);
}

test();