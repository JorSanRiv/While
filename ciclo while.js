let indice = 0; // Inicializacion

while(indice < 11){ // Condicion
    console.log(indice)
    indice++; // Incremento
}


console.log("Si el usuario deja de imprimir para")

let arreglo = [];
let userInput; 
// MIENTRAS(while), sea diferente (!) de vacio ("")
while(!(userInput=="")){
    //Ingresas
    userInput = prompt("Ingresa cualquier valor:")
    //Agregandolo al arreglo 
    arreglo.push(userInput);
} // Cuando sea vacio 
console.log("Introduciste estos valores: " + arreglo);


// Variante: DO WHILE

let contador = 0; 

console.log("Do-While")
// SI o SI se ejecuta
do{
    contador++; // Variable de control (incremento)
    console.log("Conteo: " + contador);
} while(contador < 0); // Evalucion

let i = 0;
console.log("While")
while(i < 0){
    i++; // Variable de control (incremento)
    console.log("Conteo " + i);
}