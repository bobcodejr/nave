/*Encontre o menor de 3 números */

alert(`Encontre o menor de 3 números`);

let n1 = +prompt(`Digite o primeiro numero`);
let n2 = +prompt(`Digite o segundo numero`);
let n3 = +prompt(`Digite o terceiro numero`);

if(n1 < n2 && n1 < n3){
    alert(`O numero ${n1} eh menor de todos`)
}else if(n2 < n1 && n2 < n3){
    alert(`O numero ${n2} eh menor de todos`)
}else{
    alert(`O numero ${n3} eh menor de todos`)
}