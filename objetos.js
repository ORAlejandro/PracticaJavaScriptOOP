let carnet = {
    nombre: 'Ale',
    apellido: 'Ortega',
    nacionalidad: 'Argentina',
    mascotas: ['Fioni', 'Princesa', 'Pampi'],
    nombrecompleto: this.nombre + ' ' + this.apellido,
    direccion: {
        ciudad: 'New York',
        pais: 'USA',
        calle: 'Random Street',
        altura: 1425
    }
};

console.log(carnet);
console.log(carnet.apellido);
console.log(carnet.direccion);
console.log(carnet.direccion.altura);