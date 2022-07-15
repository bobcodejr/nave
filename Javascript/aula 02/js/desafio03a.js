var alerta = alert("Bem vindo ao investimento maravilha!");
var capital = Number(prompt("Qual o valor vai investir?"));
var taxa = Number(prompt("Qual a taxa de juros?"));
var tempo = Number(prompt("Qnto tempo vai investir?"));
var juros = capital*taxa*tempo;
var montante = capital + juros

var resultado = alert(`O resultado eh: ${montante}`);