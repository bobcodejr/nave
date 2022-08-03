/*Entre 10 numeros encontre quantos são menores que 3 */

alert("Entre 10 numeros encontre quantos são menores que 3");

let random = 0

for(i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*10)
    alert(`${numb}`)

    if(numb < 3){
        random += 1
    }
}
alert(`Ao todo são ${random} menores do que 3`)