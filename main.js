const fs = require('fs');
class Contenedor {
    constructor(nombre){
        this.nombre = nombre;
    }
    async save(objeto){
        const archivo = await fs.promises.readFile(this.nombre, 'utf-8');
        const archivoParseado = Json.parse(archivo);
        let id = 1;
        archivoParseado.forEach((element, index) =>{
            if (element.id >= id) {
                id = element.id + 1;
            }
        });
    
        objeto.id = id;
        archivoParseado.push(objeto);
        await fs.promises.writeFile(this.nombre, JSON.stringify(archivoParseado, null, 2));
        return id;
    }

async getById(id){
    const archivo = await fs.promises.readFile(this.nombre, 'utf-8');
    const archivoParseado = Json.parse(archivo);
    let objetoSeleccionado = null;
    archivoParseado.forEach(element =>{
        if (element.id==id){
            objetoSeleccionado = element;
        }
    });
    return objetoSeleccionado;
}

async getAll(){
    const archivo = await fs.promises.readFile(this.nombre, 'utf-8');
    const archivoParseado = Json.parse(archivo);
    return archivoParseado;
}

async deleteById(id){
    const archivo = await fs.promises.readFile(this.nombre, 'utf-8');
    const archivoParseado = Json.parse(archivo);
    let indexSeleccionado = null;
    archivoParseado.forEach(element, index =>{
        if (element.id==id){
            indexSeleccionado = index;
        }
    });
    if (indexSeleccionado) {
        archivoParseado.splice(indexSeleccionado, 1);
        await fs.promises.writeFile(this.nombre, Json.stringify(arregloVacio, null,2));
    }
    
}

async deleteAll(){
    const arregloVacio = [];
    await fs.promises.writeFile(this.nombre, Json.stringify(arregloVacio, null,2));
}
}

const implementacion = async () => {
    const lista = new Contenedor('productos.txt')

};
