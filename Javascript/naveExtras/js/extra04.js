alert("Encontre o menor de 3 numeros")

let a = Number(prompt('Digite o primeiro numero'));
let b = Number(prompt('Digite o segundo numero'));
let c = Number(prompt('Digite o terceiro numero'));

alert ("Qual é o menor numero digitado");

if(a < b && a < c){
    alert(`O numero ${a} eh menor de todos`);
}else if(b < c && b < a){
    alert(`O numero ${b} eh menor de todos`);
}
