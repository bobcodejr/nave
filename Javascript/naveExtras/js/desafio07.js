/*Entre 10 numeros encontre quantos são maiores que 8 */

alert("Entre 10 numeros encontre quantos são maiores que 8");

let random = 0

for(i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*10)
    alert(`${numb}`)

    if(numb > 7 && numb < 10){
        random += 1
    }
}
alert(`Ao todo são ${random} maiores do que 8`)