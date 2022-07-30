alert("Entre 10 numeros encontre quantos são pares:")


par=0
for (let i = 0; i <= 10; i++){
    numb= parseInt(Math.random()*10)
    alert(numb)
    if(numb % 2 == 0){
        par+=1
    }
}
alert("temos "+par+" pares")