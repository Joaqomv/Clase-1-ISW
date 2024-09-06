//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: "Joaquin",
    edad: "21",
    genero: "Masculino"
}

console.log(persona);

//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

const caja = {
    cuadernos: 2,
    lapices: 3, 
    papel: 16,
    fotografias: 20,
    Mal_estado: false
}

console.log(caja)
console.log("")
console.log("tipo:",typeof caja)
console.log("")
console.log("cuadernos:",caja.cuadernos,"Tipo:",typeof caja.cuadernos)
console.log("lapices:",caja.lapices,"Tipo:",typeof caja.lapices)
console.log("papel:",caja.papel,"Tipo:",typeof caja.papel)
console.log("fotografias:",caja.fotografias,"Tipo:",typeof caja.fotografias)
console.log("Mal_estado:",caja.Mal_estado,"Tipo:",typeof caja.Mal_estado)