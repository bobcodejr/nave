/*Faça um programa que receba o nome, o salário e o cargo de um grupo de
funcionários e diga quanto eles vão receber de reajuste de acordo com o
salário atual e o tempo de casa de cada um.

com o tempo de casa de até 3 anos e:
caso ele receba menos de 2,000 ele receberá um aumento de 2%( *1.02);
caso ele receba entre 2000 e 5000 ele receberá um aumento de 4%; caso ele
receba entre 5000 e 7000 ele receberá um aumento de 5%; mais de 7000 ele
receberá 6,5%.

Com o tempo de casa de até 6 anos e:
caso ele receba menos de 2,000 ele receberá um aumento de 3%; caso ele
receba entre 2000 e 5000 ele receberá um aumento de 5%; caso ele receba
entre 5000 e 7000 ele receberá um aumento de 7%;mais de 7000 ele receberá10%.

Com o tempo de casa de até 10 anos e:
caso ele receba menos de 2,000 ele receberá um aumento de 5%;
caso ele receba entre 2000 e 5000 ele receberá um aumento de 7%;
caso ele receba entre 5000 e 7000 ele receberá um aumento de 9%;
mais de 7000 ele receberá 12%.

No final, exiba o nome de todos os funcionários , seus respectivos cargos, o
salário atual e futuro de cada um, quanto cada um recebeu e quanto a
empresa gasta antes e depois desse aumento*/

let nome = prompt(`Digite o nome do usuario`);
let salario = Number(prompt(`Digite o salario do usuario`));
let tempo = prompt(`Digite o tempo de casa`);
let cargo = prompt(`Digite o cargo do usuario`);


if(tempo <= 3){
    if(salario < 1999){
        salario*= 1.03

        alert(`Seu salario será de: `+ salario.toFixed(2))
    }else if(salario < 5000){
        salario*= 1.05
        alert(`Seu salario sera de: `+ salario.toFixed(2))
    }else if(salario < 7000){
        salrio*=1.07
        alert(`Seu salario sera de:` + salario.toFixed(2))
    }else{
        salario*=1.10
        alert(`Seu salario sera de:` + salario.toFixed(2))
    }if(tempo <= 6){
        if(salario < 1999){
            salario*= 1.03
            alert(`Seu salario será de: `+ salario.toFixed(2))
        }else if(salario < 5000){
            salario*= 1.05
            alert(`Seu salario sera de: `+ salario.toFixed(2))
        }else if(salario < 7000){
            salrio*=1.07
            alert(`Seu salario sera de:` + salario.toFixed(2))
        }else{
            salario*=1.10
            alert(`Seu salario sera de:` + salario.toFixed(2))
        }
    }else if(tempo <= 10){
        if(salario < 1999){
            salario*= 1.05
            alert(`Seu salario será de: `+ salario.toFixed(2))
        }else if(salario < 5000){
            salario*= 1.07
            alert(`Seu salario sera de: `+ salario.toFixed(2))
        }else if(salario < 7000){
            salrio*=1.09
            alert(`Seu salario sera de:` + salario.toFixed(2))
        }else{
            salario*=1.12
            alert(`Seu salario sera de:` + salario.toFixed(2))
        }
    }
}

alert(`O nome do usuário eh: ${nome} seu salario eh: ${salario.toFixed(2)} seu cargo eh:  ${cargo} seu tempo de atuação eh: ${tempo}`)