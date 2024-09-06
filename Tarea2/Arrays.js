//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function Sarray(numeros){
    let s = 0;
    for(let i=0;i<numeros.length; i++){
        s += numeros[i]
    }
    return s;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(Sarray(array));
console.log("");
//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedio(numeros){
    let s = 0;
    for(let i=0;i<numeros.length; i++){
        s += numeros[i];
    }
    let promedio = s/numeros.length;
    return promedio;
}
console.log(promedio(array));
console.log("");
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function arreglo(string){
    let nstring = [];
    for (let i = 0; i < string.length; i++) {
        nstring.push(string[i].toUpperCase());
    }
    return nstring;
}
let nstring = ["hola", "que tal", "como le va"];
console.log(arreglo(nstring));
console.log("");
//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function fpar(arreglo) {
    let par = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            par.push(arreglo[i]);
        }
    }
    return par;
}
console.log(fpar(array));
