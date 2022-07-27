import fs from "fs";
import Product from './model.js';
import {generateId} from '../../../utils/utils.js';

const jsonPath = './data/product.json';

export const findProducts = async() => {
    try {
        const products = await fs.promises.readFile(jsonPath,"utf-8");
        if(products){
            const productsData = JSON.parse(products);
            return productsData;
        }
        return [];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const findProductById = async(id) => {
    try {
        const exitsProducts = await findProducts();
        if(exitsProducts){
            const product = exitsProducts.find(p => p.id == id);
            if(product){
                return product;
            }
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createProduct = async(data) => {
    try {
        const products = await findProducts();
        const newProduct = new Product(generateId(),Date.now(),data.nombre,data.descripcion,data.codigo,data.foto,Number(data.precio),Number(data.stock));
        products.push(newProduct);
        await fs.promises.writeFile(jsonPath,JSON.stringify(products,null,2));
        return newProduct;
    } catch (error) {
        return false;
    }
}

export const updateProduct = async(id,data) => {
    try {
        let isChange = false;
        let product = {};
        const products = await findProducts();
        products.map(p => {
            if(p.id == id){
                p.nombre = (data.nombre) ? data.nombre : p.nombre;
                p.descripcion = (data.descripcion) ? data.descripcion : p.descripcion;
                p.codigo = (data.codigo) ? data.codigo : p.codigo;
                p.foto = (data.foto) ? data.foto : p.foto;
                p.precio = (data.precio) ? Number(data.precio) : Number(p.precio);
                p.stock = (data.stock) ? Number(data.stock) : Number(p.stock);
                product=p;
                isChange=true;
            }
        });

        if(isChange){
            await fs.promises.writeFile(jsonPath,JSON.stringify(products,null,2));
            return product
        }
        else{
            return isChange;
        }
    } catch (error) {
        return false;
    }
}

export const deleteProductById = async(id) => {
    try {
        const findProduct = await findProductById(id);
        if(findProduct){
            const products = await findProducts();
            let newProducts = products.filter(p => p.id != id);
            await fs.promises.writeFile(jsonPath,JSON.stringify(newProducts,null,2));
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}