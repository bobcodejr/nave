//Crie um programa que 
//Escreva uma conversa com 5 variaveis e 
//Organize-a no console da seguinte forma
//olá programador, qual seu nome?
//Augusto
//Montauriol Augusto
//sua idade é: 18 anos certo?
//ha quanto tempo voce estuda
//estudo a 8 anos
//tudo isso? incrivel!! O que voce faz quando não esta estudando
//fazer trilha na praia
//incrivel!!!

var nome = "Bobby";
var sobrenome = "Sinclar";
var idade = 30;
var tempo = 4;
var hobbies = "ler livro";

console.log(`Olá programador, qual o seu nome?`);
setTimeout(function(){
    console.log("...")
},1000);

setTimeout(function(){
    console.log(`Meu nome eh ${nome}`);
},2000);

setTimeout(function(){
    console.log("...")
},2900);

setTimeout(function(){
    console.log(`Sua idade é: 18 anos certo?`);
},3900);


setTimeout(function(){
    console.log("...")
},4200);

setTimeout(function(){
    console.log(`Não minha idade eh: ${idade}`);
},4900);

setTimeout(function(){
    console.log("...")
},5200);

setTimeout(function(){
    console.log(`Ha quanto tempo vc estuda?`);
},6000);

setTimeout(function(){
    console.log("...")
},7200);

setTimeout(function(){
    console.log(`Estudo a ${tempo} anos`);
},7800);

setTimeout(function(){
    console.log("...")
},8200);

setTimeout(function(){
    console.log(`tudo isso? incrivel!! O que voce faz quando não esta estudando`);
},8900);

setTimeout(function(){
    console.log("...")
},9900);

setTimeout(function(){
    console.log(`Gosto de fazer ${hobbies}`);
},10000);

setTimeout(function(){
    console.log("...")
},10500);

setTimeout(function(){
    console.log(`Incrivel`);
},12000);
