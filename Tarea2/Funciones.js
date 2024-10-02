
let pepe= "AnaKin"
//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function M (texto){
    return texto.toUpperCase()
}
console.log(M(pepe))
//2. Crea una función que reciba un string y retorne el string en minúsculas.
function m (texto){
    return texto.toLowerCase()
}
console.log(m(pepe))
//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta (x,y){
    return x-y
}
let x=10, y=2
console.log(resta(x,y))
//4. Crear una función que reciba como parámetro 2 números y los divida.
function dividir (x,y){
    return x/y
}
console.log(dividir(x,y))
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplique (x,y){
    return x*y
}
console.log(multiplique(x,y))
//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(texto){
    return texto.length;
}
console.log(longitud(pepe))