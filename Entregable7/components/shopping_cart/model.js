class ShoppingCart{
    constructor(id = '',timestamp=Date.now(),productos = []){
        this.id = id;
        this.timestamp=timestamp;
        this.productos = productos;
    }
}

export default ShoppingCart;