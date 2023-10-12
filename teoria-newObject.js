//con new Object creamos objetos literales
const persona = new Object()
console.log(persona);

//es lo mismo que crear un objeto de esta manera
const persona2 = {}
console.log(persona2);

//si bien ambos son lo mismo una 'buena practica' es usar el 2do metodo

const informacion = {
    nombre: '',
    apellido: '',
    edad: 25,
    mostrarNombre() {}
};

console.log(Object.keys(informacion));
//con Object.keys vamos a obtener las keys del objeto menciona y lo convertimos a un Array, de esta manera tambien podemos recorrerlo

const informacion2 = {
    nombre: 'Dylan',
    apellido: 'Fizz',
    edad: 33,
    mostrarNombre() {
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(Object.values(informacion2));
//de esta manera podemos obtener la contraparte, no las keys si no los valores
//A esto no le podemos llamar constructor porque no utilizamos la palabra reservada 'new'