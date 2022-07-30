alert("Encontre o maior de 3 numeros")

let a = Number(prompt('Digite o primeiro numero'));
let b = Number(prompt('Digite o segundo numero'));
let c = Number(prompt('Digite o terceiro numero'));

alert ("Qual é o maior numero digitado");

if(a > b && a > c){
    alert(`O numero ${a} eh maior de todos`);
}else if(b > c && b > a){
    alert(`O numero ${b} eh maior de todos`);
}else if(c > a && c > b){
    alert(`O numero ${b} eh maior de todos`);
}
