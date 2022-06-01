const fs = require('fs');
class Contenedor{
    constructor(fileName) {
        this.fileName = fileName;
    }

    async getAll(){
        return new Promise(
            async(resolve,reject) => {
                const data = await fs.promises.readFile(this.fileName,'utf-8');
                if(data){
                    const items = JSON.parse(data);
                    return resolve(items);
                }
                else{
                    return reject(null);
                }
            }
        );
    }

    async getById(id = 0){
        return new Promise(
            async (resolve,reject) => {
                let items = await this.getAll();
                let item = {};
                let itExists = false;
                if(items){
                    items.map(i => {
                        if(i.id == id){
                            itExists = true;
                            item = i;
                        }
                    })
                }

                if(itExists){
                    return resolve(item);
                }else{
                    return reject(null);
                }
            }
        );
    }

    async save(item = {title:'',price:0,thumbnail:'url'}){
        return new Promise(
            async (resolve,reject) => {
                try {
                    let dataItems = [];
                    let id = 1;
                    this.getAll()
                    .then(it => {
                        dataItems = it;
                        if(dataItems.length <= 0){
                            item.id = id;
                            dataItems.push(item);
                            fs.promises.writeFile(this.fileName, JSON.stringify(dataItems, null, 2));
                            return resolve(item.id);
                        }
                        else{
                            item.id = dataItems[dataItems.length-1].id+1;
                            dataItems.push(item);
                            fs.promises.writeFile(this.fileName, JSON.stringify(dataItems, null, 2));
                            return resolve(item.id);
                        }
                        
                    })
                    .catch(err => {
                        item.id = id;
                        dataItems.push(item);
                        fs.promises.writeFile(this.fileName, JSON.stringify(dataItems, null, 2));
                        return resolve(item.id);
                    })
                } catch (err) {
                    return reject(err);
                }
                
            }
        );
    }

    async deleteAll(){
        return new Promise(
            (resolve,reject) => {
                try {
                    let dataItems = [];
                    fs.promises.writeFile(this.fileName, JSON.stringify(dataItems, null, 2));
                    return resolve(true);
                } catch (err) {
                    return reject(err);
                }
            }
        )
    }

    async deleteById(id = 0){
        return new Promise(
            async (resolve,reject) => {
                try {
                    let items = await this.getAll();
                    if(items){
                        let itemSelect = await this.getById(id);
                        if(itemSelect){
                            let newListItems = items.filter(it => it.id != Number(id));
                            fs.promises.writeFile(this.fileName, JSON.stringify(newListItems, null, 2));
                            return resolve(true);
                        }
                        else{
                            return reject(null);
                        }
                    }
                    else{
                        return reject(null);
                    }
                } catch (err) {
                    return reject(null);
                }
            }
        );
    }
}

module.exports = Contenedor;