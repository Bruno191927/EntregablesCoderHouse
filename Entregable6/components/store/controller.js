const fs = require('fs');

exports.readProducts = async() => {
    return new Promise(
        async(resolve,reject) => {
            const data = await fs.promises.readFile('store.txt','utf-8');
            if(data){
                const prodcuts = JSON.parse(data);
                return resolve(prodcuts);
            }
            else{
                return reject(null);
            }
        }
    );
}

exports.insertProduct = async(data) => {
    return new Promise(
        async(resolve,reject) => {
            try {
                const productData = await this.readProducts();
                productData.push(data);
                await fs.promises.writeFile('store.txt', JSON.stringify(productData, null, 2));
                return resolve(true);
            } catch (error) {
                return reject(false);
            }
        }
    );
}