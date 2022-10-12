class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(name) {
        this.mascotas.push(name);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(name,autor){
        this.libros.push({nombre: name, autor: autor});
    }

    getBookNames(){
        return this.libros.map(element => element.nombre);
        //this.libros.forEach(element => console.log([element.nombre]));
    }

}

const usuario = new Usuario('adolfo', 'daniel', [], []);

console.log(usuarioUno.getFullName());
usuario.addMascota('duke');
usuario.addMascota('gertru');
usuario.addMascota('pumba');
console.log(`Cantidad de mascotas del usuario: `, usuario.countMascotas());
usuario.addBook('evangelion', 'akira');
usuario.addBook('ghostinshell', 'submerged');
console.log(usuario.getBookNames());
