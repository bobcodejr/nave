/*Entre 10 números, encontre quantos são pares*/

alert(`Entre 10 números, encontre quantos são pares`);

let par = 0;

for(i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*10)
    alert(`${numb}`)
    if(numb % 2 == 0){
        par+= 1
    }
}
alert(`Temos ${par} pares`)