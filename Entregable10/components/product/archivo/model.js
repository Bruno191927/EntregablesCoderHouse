class Product{
    constructor(id='',timestamp = Date.now(),nombre='',descripcion='',codigo='',foto='',precio=0,stock=0){
        this.id = id;
        this.timestamp = timestamp;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
    }
}

export default Product;