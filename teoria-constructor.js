//el constructor es una especie de generador de objetos
//los constructores son funciones que nos permiten crear objetos
//el constructor se genera con la primera letra en mayuscula

function Persona() {
    this.nombre = '',
    this.apellido = '',
    this.edad = 0,
    this.nombreCompleto = function () {
        return `${this.nombre} ${this.apellido}`
    };
};

const persona1 = new Persona();
persona1.nombre = 'Jorge'
persona1.apellido = 'Perez'
persona1.edad = 35
console.log(persona1);
console.log(persona1.nombreCompleto());

const persona2 = new Persona();
persona2.nombre = 'Enrique'
persona2.apellido = 'Gonzalez'
console.log(persona2.nombreCompleto());
const persona3 = new Persona();
const persona4 = new Persona();

console.log(persona2, persona3, persona4);