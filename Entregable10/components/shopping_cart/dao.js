import fs from "fs";
import ShoppingCart from './model.js';
import {findProductById} from '../product/archivo/dao.js';
import {generateId} from '../../utils/utils.js';

const jsonPath = './data/shopping_cart.json';

export const findShoppinCarts = async(data) => {
    try {
        const shoppingCarts = await fs.promises.readFile(jsonPath,"utf-8");
        if(shoppingCarts){
            const shoppingCartsData = JSON.parse(shoppingCarts);
            return shoppingCartsData;
        }
        return [];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const findShoppingCartById = async(id) => {
    try {
        const exitsShoppingCarts = await findShoppinCarts();
        if(exitsShoppingCarts){
            const shoppingCart = exitsShoppingCarts.find(s => s.id == id);
            if(shoppingCart){
                return shoppingCart;
            }
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createShoppingCart = async(data) => {
    try {
        let products = [];
        const shoppingCarts = await findShoppinCarts();
        if(shoppingCarts){
            if(data.products){
                if(data.products.length > 0){
                    for (const productId of data.products) {
                        const productInfo = await findProductById(productId);
                        if(productInfo){
                            products.push(productInfo)
                        }
                    }
                }
            }
            const newShoppingCart = new ShoppingCart(generateId(),Date.now(),products);
            shoppingCarts.push(newShoppingCart);
            await fs.promises.writeFile(jsonPath,JSON.stringify(shoppingCarts,null,2));
            return newShoppingCart;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const deleteShoppingCart = async(id) => {
    try {
        const shoppinCartExist = await findShoppingCartById(id);
        if(shoppinCartExist){
            const shoppingCarts = await findShoppinCarts();
            let newShoppingCarts = shoppingCarts.filter(s => s.id != id);
            await fs.promises.writeFile(jsonPath,JSON.stringify(newShoppingCarts,null,2));
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

export const deleteShoppingCartProduct = async(id,productId) => {
    try {
        const shoppinCartExist = await findShoppingCartById(id);
        if(shoppinCartExist){
            let productExist = shoppinCartExist.productos.find(p=> p.id == productId);
            if(productExist){
                let newListProducts = shoppinCartExist.productos.filter(p=> p.id != productId);
                const shoppingCarts = await findShoppinCarts();
                shoppingCarts.map(s => {
                    if(s.id == id){
                        s.productos = newListProducts;
                    }
                });
                await fs.promises.writeFile(jsonPath,JSON.stringify(shoppingCarts,null,2));
                return {status:true,msg:'Ok'};
            }
            return {status:false,msg:'No se ha encontrado el id del Producto'};
        }
        return {status:false,msg:'No se ha encontrado el id del Carrito'};
    } catch (error) {
        return {status:false,msg:'Se encontro un error'};
    }
}

export const insertProdcutInCartProduct = async(id,products) => {
    try {
        const shoppinCartExist = await findShoppingCartById(id);
        if(shoppinCartExist){
            const shoppingCarts = await findShoppinCarts();
            for (const shoppingCart of shoppingCarts) {
                if(shoppingCart.id == id){
                    for (const productId of products) {
                        let productExist = shoppinCartExist.productos.find(p=> p.id == productId);
                        if(!productExist){
                            let productInfo = await findProductById(productId);
                            if(productInfo){
                                shoppingCart.productos.push(productInfo);
                            }
                        }
                    }
                }
            }
            await fs.promises.writeFile(jsonPath,JSON.stringify(shoppingCarts,null,2));
            return {status:true,msg:'Ok'};
        }
        return {status:false,msg:'No se ha encontrado el id del Carrito'};
    } catch (error) {
        return {status:false,msg:'Se encontro un error'};
    }
}