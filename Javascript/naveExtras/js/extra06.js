alert("Entre 10 numeros encontre quantos são impares")

let impar = 0

for(let i = 0; i <= 10; i++){
    numb = parseInt(Math.random()*10)
    alert(numb)
    if(numb % 2 == 1)
    impar+=1
}
alert("temos "+impar+" impares")