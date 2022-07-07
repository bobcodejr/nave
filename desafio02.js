/*Faça um programa que calcule a formula do Delta
e depois faça a formula de bascara para encontrar os 
seguintes resultados*/

let a = 1;
let b = -1;
let c = -30;

let delta = b*b -4*a*c;
let raizDelta= delta**0.5;
let bascaraPositivo = (-b + raizDelta)/(2*a);
let bascaraNegativo= (-b - raizDelta)/(2*a);

console.log(`A resultado de delta eh: ${delta}`);
console.log(`A resultado da raizDelta eh: ${raizDelta}`);
console.log(`A resultado de bascar eh: ${bascaraPositivo}`);
console.log(`A resultado de bascar eh: ${bascaraNegativo}`);