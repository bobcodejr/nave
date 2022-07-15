alert("Dentre as cores sitadas (amarelo, verde, vermelho, azul, laranja, roxo) escolha a sua cor preferida");

let cor = prompt("Digite a cor desejada")
if(cor.toLowerCase().trim()== "vermelho"){
    document.querySelector("color").style.backgroundColor = "red";
}
if(cor.toLowerCase().trim()== "azul"){
    document.querySelector("color").style.backgroundColor = "blue";
}
if(cor.toLowerCase().trim()== "amarelo"){
    document.querySelector("color").style.backgroundColor = "yellow";
}

