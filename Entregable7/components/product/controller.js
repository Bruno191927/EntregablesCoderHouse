import {createProduct,findProducts,findProductById,updateProduct,deleteProductById} from './dao.js';
import { productDto,productList } from './dto.js';
export const createProductController = async(request,response) => {
    
    const productData = request.body;
    const newProduct = await createProduct(productData);
    if(newProduct){
        response.status(201).json({
            msg:'El producto se creo de manera exitosa',
            data:newProduct
        })
    }
    else{
        response.status(400).json({
            msg:'Ocurrio un error al crear el producto',
        })
    }
}

export const findProductsController = async(request,response) => {
    
    const products = await findProducts();
    response.send(productList(products));
}

export const findProductByIdController = async(request,response) => {
    const id = request.params.id;
    const productExist = await findProductById(id);
    if(productExist){
        response.send(productDto(productExist));
    }
    else{
        response.status(404).json({
            msg:'No se encontro el producto',
        })
    }
}

export const updateProductController = async(request,response) => {
    const id = request.params.id;
    const productData = request.body;
    const upProduct = await updateProduct(id,productData);
    if(upProduct){
        response.status(201).json({
            msg:'El producto se creo de manera exitosa',
            data:upProduct
        })
    }
    else{
        response.status(404).json({
            msg:'No se encontro el producto',
        })
    }
}

export const deleteProductByIdController = async(request,response) => {
    const id = request.params.id;
    const deleteProduct = await deleteProductById(id);
    if(deleteProduct){
        response.json({
            msg:`El producto con el id ${id} fue eliminado con exito`
        })
    }
    else{
        response.status(404).json({
            msg:'No se encontro el producto',
        })
    }
}