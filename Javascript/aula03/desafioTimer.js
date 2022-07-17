/*Desafio extra. Faça um programa que indentifique 18h e 15m e possa fatiar essa string para obter 
os valores desejados para dizer se é dia, tarde ou noite*/

let hora = prompt("Digite que horas são: ");
const resultado = hora.slice(0,2);


if(resultado >= 18){
    alert(`Boa noite! ${resultado}`)
}else if(resultado >= 12 && resultado <= 17){
    alert(`Boa tarde! `)
}else if(resultado >= 0 && resultado <= 11){
    alert(`Bom dia!`)
}
