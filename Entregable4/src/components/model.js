class Product{
    constructor(){
        this.products = [];
    }

    getProducts() {
        return this.products;
    }
    
    getProductById(id = ''){
        console.log(id);
        let productsData = this.products;
        let productSelect = {};
        if(productsData.length > 1){
            productsData.map(p => {
                if(p.id == id){
                    productSelect = p;
                }
            });
            return productSelect;
        }
        else{
            console.log('aqui no');
            return null;
        }
    }

    createProduct(productData = {}){
        let id = 1;
        let products = this.products;
        if(products.length < 1){
            productData.id = id;
            this.products.push(productData);
        }
        else{
            productData.id = products[products.length - 1].id + 1;
            this.products.push(productData);
        }
        return productData;
    }

    updateProduct(id = '',productData = {}){
        let products = this.products;
        let exist = false;
        if(products.length > 1){
            this.products.map(p => {
                if(p.id == id){
                    exist = true;
                    p.title = productData.title;
                    p.price = productData.price;
                    p.thumbnail = productData.thumbnail;
                }
            });

            if(exist){
                return productData;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    }

    deleteProduct(id = ''){
        let products = this.products;
        let exist = false;
        if(products.length > 1){
            this.products.map(p => {
                if(p.id == id){
                    exist = true;
                }
            });

            if(exist){
                let newListProducts = this.products.filter(p => p.id != Number(id));
                this.products = newListProducts;
                return id;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    }
}

module.exports = Product;