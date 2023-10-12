// =============== [DEFINICION] ===============

//con 'this' podemos acceder a las keys propias del objeto en el que estemos trabajando.
//obteniendo valores propios del objeto en donde llamamos a 'this'
//nota: el .this funciona de manera especial con las funciones fleche () => dentro de los objetos

// =============== [PRACTICA 1] ===============
let persona = {
    nombre: 'Ale',
    apellido: 'Ortega',
    nacionalidad: 'Argentina',
    mascotas: ['Fioni', 'Princess', 'Pampi'],
    nombrecompleto: this.nombre + ' ' + this.apellido,
    direccion: {
        ciudad: 'Viedma',
        pais: 'Argentina',
        calle: 'Maipu',
        altura: 1425
    }
};

//console.log(persona);
//console.log(persona.apellido);
//console.log(persona.direccion);
//console.log(persona.direccion.altura);

// =============== [PRACTICA 2] ===============

const cuenta = {
    numero: '392112',
    saldo: 1500,
    depositar(cantidad) {
        this.saldo = this.saldo + cantidad
    },
    extraer(cantidad) {
        this.saldo = this.saldo - cantidad
    }
};

//console.log(cuenta);
//cuenta.depositar(500);
//cuenta.depositar(250);
//console.log(cuenta);
//cuenta.extraer(900);
//console.log(cuenta);

// =============== [PRACTICA 3] ===============

const perfil = {
    numeroFavorito: 13,
    apodo: 'Dark',
    colorFavorito: 'Morado',
    estacionFavorita: 'Invierno',
    cambioDeNumeroFavorito(nuevoNumero) {
        this.numeroFavorito = nuevoNumero
    },
    cambioDeApodo(nuevoApodo) {
        this.apodo = nuevoApodo
    },
    cambioDeColorFavorito(nuevoColor) {
        this.colorFavorito = nuevoColor
    }
};

console.log(perfil);
perfil.cambioDeNumeroFavorito(19);
perfil.cambioDeApodo('Grey'),
perfil.cambioDeColorFavorito('Rojo')
console.log(perfil);