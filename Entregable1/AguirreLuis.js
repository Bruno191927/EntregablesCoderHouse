class Usuario{
    constructor(nombre,apellido,libros = [],mascotas = []){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota = ''){
        this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombreLibro = '',nombreAutor = ''){
        const book = {
            nombre:nombreLibro,
            autor:nombreAutor
        };
        
        this.libros.push(book);
    }

    getBookNames(){
        let bookNames = [];
        this.libros.map(l => {
            bookNames.push(l.nombre);
        });
        return bookNames;
    }
}

const usuario = new Usuario('Luis','Aguirre',[{nombre:'Design Pattern',autor:'Erich Gamma'}],['Perro']);


//Metodo getFullName
console.log('Nombre Completo:');
console.log(usuario.getFullName());

console.log('-------------');

//Metodo countMascotas
console.log('Numero de mascotas:');
console.log(usuario.countMascotas());

//Metodo addMascota
usuario.addMascota('Gato');
console.log('Numero de mascotas:');
console.log(usuario.countMascotas());

console.log('-------------');

//MetodogetBookNames
console.log('Nombre de Libros:');
console.log(usuario.getBookNames());

//Metodo addBook
usuario.addBook('Clean Code','Robert C. Martin');
console.log(usuario.getBookNames());




