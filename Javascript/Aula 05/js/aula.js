/*Faça um programa que receba o nome, salario, cpf e anos na empresa
de um numero de funcionarios e diga quanto ele vai receber de reajuste.

Com 3 anos de casa
(caso ele receba menos de 2.000 ele recebera um aumento de 5% (*1.05))
(caso ele receba entre 2.000 e 5.000 ele receberar um aumento de 7%)
(caso ele receba entre 5.000 e 7.000 ele recebera um aumento de 10%)
mais de 7000 ele recebera 12,5% 

Com 5 anos de casa
caso ele receba menos de 2.000 ele recebera um aumento de 7% (*1.07)
caso ele receba entre 2.000 e 5.000 ele recebera um aumento de 10%(*1.10)
caso ele receba entre 5.000 e 7.000 ele recebera um aumento de 12%(*1.12)
mais de 7000 ele recebera 15%

Com 10 anos de casa
caso ele receba menos de 2.000 ele recebra um aumento de 10%(*1.10)
caso ele receba entre 2.000 e 5.000 ele recebera um aumento de 15%(*1.15)
caso ele receba entre 5.000 e 7.000 ele recebera um aumento de 20%(1.20)
mais de 7000 ele recebera 25%

*/


let nome = prompt("Digite o seu nome:");
let salario = Number(prompt("Digite o seu salario:"));
let cpf = prompt("Digite o seu número de cpf:");
let numeroTempo = prompt("Digite o tempo em anos de trabalho:");

if(numeroTempo <= 3){
    if(salario < 1999){
        salario*= 1.05
        alert(`Seu salario será de:`+ salario)
    }else if(salario <= 2000 && salario <= 4999){
        salario*= 1.07
        alert(`Seu salario será de:` salario*)
    }else if(salario <= 5000 && salario <= 7000){
        salario*=1.10
        alert(`Seu salario será de: {salario}*`)
    }else if(salario >= 7000){
        salario*=1.125
        alert(`Seu salario sera de: {salario}*`)
    }
}else if(numeroTempo <= 5){
    if(salario < 1999){
        salario*=1.07
        alert(`Seu salario será de:` + salario)
    }else if(salario <= 2000 && salario <= 4999){
        salario*=1.10
        alert(`Seu salario será de:` salario)
    }else if(salario <= 5000 && salario <= 7000){
        salario*=1.125
        alert(`Seu salario será de: {salario}*11.05`)
    }else if(salario >= 7000){
        salario*=1.15
        alert(`Seu salario sera de:` + salario)
    }
} else if(numeroTempo <= 10){
    if(salario < 1999){
        alert(`Seu salario será de: {salario}*1.05`)
    }else if(salario <= 2000 && salario <= 4999){
        alert(`Seu salario será de: {salario}*8.05`)
    }else if(salario <= 5000 && salario <= 7000){
        alert(`Seu salario será de: {salario}*11.05`)
    }else if(salario >= 7000){
        alert(`Seu salario sera de: {salario}*16.05`)
    }
}



