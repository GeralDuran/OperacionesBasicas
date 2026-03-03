// Declaramos las variables para los numeros que hran las operaciones basicas 
 
var numero1 = parseInt( prompt("Ingresa numero 1")); 
var numero2 = parseInt(prompt("Ingresa numero 2")); 

//Hacemos todas las operaciones basicas y las mostramos en consola
 
var suma = numero1+numero2; 
console.log("La suma de: "+numero1+" + "+numero2+" = "+suma); 

var resta = numero1-numero2; 
console.log("La resta de: "+numero1+" - "+numero2+" = "+resta); 

var multiplicacion = numero1*numero2; 
console.log("La multiplicación de: "+numero1+" x "+numero2+" = "+multiplicacion);

var division = numero1/numero2; 
console.log("La división de: "+numero1+" / "+numero2+" = "+division); 

var modulo = numero1%numero2; 
console.log("El modulo de: "+numero1+" % "+numero2+" = "+modulo);