/*Encontre a média ponderada de 3 números( peso 1, peso 2, peso 3 respectivamente)*/

let n1 = +prompt("Digite o primeiro numero");
let n2 = +prompt("Digite o segundo numero");
let n3 = +prompt("Digite o terceiro numero");

let mediaPonderada = (n1*1 + n2*2 + n3*3)/6

alert(`O resultado da media ponderada eh: ${mediaPonderada}`);