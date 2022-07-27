import model from './model.js';
class ShoppingMongoContainer{
    constructor() {

    }

    async create(data){
        try {
            const newShoppingCart = await model.create({
                productos:data.productos
            });
            return newShoppingCart;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}   