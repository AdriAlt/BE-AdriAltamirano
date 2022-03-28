class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [],
        this.mascotas = []
    }
    
    //Retorna el nombre completo del usuario
    getFullName(nombre, apellido){
        return `${nombre} ${apellido}`

    }
    // Recibe el nombre de una mascota y lo agrega al array de mascotas 
    addMascota (newMascota) {
        this.mascotas.push(newMascota) 
    }
    // Retorna la cantidad de mascotas
    getCountMascotas () {
        return this.mascotas.length
    }
    //Recibe un string nombre  y un string autor. Debe agregar un objeto: {nombre:String, autor: String} al array libros
    addBook (bookName, bookAuthor) {
        this.libros.push({ nombre: bookName, autor: bookAuthor })
    }
    //Retorna un array con los nombres del array de libros del usuario
    getBooksName () {
        return Object.keys(this.libros).map(key => this.libros[key].nombre)
    }
    getBooks () {
        return this.libros
    }
}

const usuario = new Usuario()

usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.addMascota('Pez')

usuario.addBook("Orgullo y prejuicio", 'Jane Austen')
usuario.addBook('Viaje al centro de la Tierra', 'Julio Verne')

const FullName = usuario.getFullName('Adri', 'Altamirano')
const BooksName = usuario.getBooksName()
const CountMascota = usuario.getCountMascotas()

console.log('Nombre completo', FullName)
console.log('Libros', BooksName)
console.log('Contando mascotas', CountMascota)