/*Em um conjunto de números qual eh o primeiro numero par sorteado*/

alert("Em um conjunto de números qual eh o primeiro numero par sorteado");

let random = 0

for(i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*5)

    if(numb % 2 == 0){
    
        alert(`Esse numero é o primeiro par da lista ${numb}`)
    }else{
        alert(`Esse numero é o primeiro eh impar da lista ${numb}`)   
    }
}
