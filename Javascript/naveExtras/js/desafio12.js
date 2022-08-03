/*Em um conjunto de números,quantos números ímpares foram sorteados antes de o primeiro número par ser sorteado?*/

alert("Em um conjunto de números,quantos números ímpares foram sorteados antes de o primeiro número par ser sorteado?");

let random = 0

for(i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*10)
    
    if(numb % 2 == 1){
    
        alert(`Esse numero é o primeiro impar da lista ${numb}`)
    }
}

alert(`Esse eh o total de numeros impares qua aparecem antes dos numeros pares ${numb}`)

