import {createShoppingCart,findShoppinCarts,findShoppingCartById,deleteShoppingCart,deleteShoppingCartProduct,insertProdcutInCartProduct} from './dao.js';
import {shoppingCartList,shoppingCartDto} from './dto.js';


export const findShoppingCartsController = async(request,response) => {
    const shoppingCarts = await findShoppinCarts();
    return response.send(shoppingCartList(shoppingCarts));
}

export const findShoppingCartByIdController = async(request,response) => {
    const id = request.params.id;
    const shoppingCart = await findShoppingCartById(id);
    if(shoppingCart){
        return response.send(shoppingCartDto(shoppingCart));
    }
    else{
        response.status(404).json({
            msg:'No se encontro el producto',
        });
    }
}

export const createShoppinCartController = async(request,response) => {
    const shoppingCartData = request.body;
    const newShoppingCart = await createShoppingCart(shoppingCartData);
    if(newShoppingCart){
        return response.status(201).json({
            msg:'El carrito se creo correctamente',
            data:newShoppingCart
        });
    }
    else{
        response.status(400).json({
            msg:'Ocurrio un error al crear el producto',
        })
    }
}

export const deleteShoppingCartController = async(request,response) => {
    const id = request.params.id;
    const deleteShopping = await deleteShoppingCart(id);
    if(deleteShopping){
        response.json({
            msg:`El carrito con el id ${id} fue eliminado con exito`
        })
    }
    else{
        response.status(404).json({
            msg:'No se encontro el carrito',
        })
    }
}

export const deleteShoppingCartProductController = async(request,response) => {
    const id = request.params.id;
    const idProduct = request.params.id_prod;
    const deleteShoppingProduct = await deleteShoppingCartProduct(id,idProduct);
    if(deleteShoppingProduct.status){
        response.json({
            msg:`El producto con el id ${idProduct} del carrito ${id} fue eliminado con exito`
        })
    }
    else{
        return response.status(404).json({
            msg:deleteShoppingProduct.msg
        })
    }
}

export const insertProductInCartProductController = async(request,response) => {
    const id = request.params.id;
    const data = request.body;
    const insertProducts = await insertProdcutInCartProduct(id,data.products);
    if(insertProducts.status){
        response.json({
            msg:`Se agregaron los productos con exito`
        })
    }
    else{
        return response.status(404).json({
            msg:insertProducts.msg
        })
    }
}