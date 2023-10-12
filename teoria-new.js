function Persona() {
    this.nombre = '',
    this.apellido = ''
}

const ciudadano = new Persona()
console.log(ciudadano);

//sin la palabra reservada new tan solo haremos la ejecucion de una funcion
//en la mayoria de los casos se trata de una funcion sin retorno, por lo cual casi siemrpe obtendremos undefined

function Monitor() {
    this.pulgadas = '';
    this.color = '';
}

const monitorUno = new Monitor()
//undefined
//console.log(monitorUno);
//aca obtenemos que monitorUno es un objetov

//en tanto de esta otra manera
const monitorDos = Monitor()
//undefined => de la misma manera que nos da el primer ejemplo
//la diferencia se encuentra cuando se consologea:
//console.log(monitorDos);
//tambien obtenemos undefined porque esta intentando ejecutar una funcion y esta no tiene return
//ademas el .this que tenemos dentro de la funcion esta intentando buscar un objeto para el cual asignarse
//cuando esto ocurre el this que no tiene objeto al cual asignarse se autoasignara a objetos superiores, como en el caso del navegador el objeto Window
//en el caso de que el constructor este dentro de otro objeto se le asigna los undefined a dicho objeto contenedor