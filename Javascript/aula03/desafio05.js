alert("Bem vindo ao investimento maravilha!");
alert("temos varias opções de investimentos de acordo com o seu montante!");
alert("Caso vc invista menos de 1000 a taxa de juros sera 6% ao ano");
alert("Caso vc invista menos de 5000 e for pelo menos 6 meses a taxa de juros sera 9% ao ano");
alert("Caso vc invista menos de 10.000 e for pelo menos 14 meses a taxa de juros sera 12% ao ano");
alert("Caso vc invista mais de 10.000 e for pelo menos 3 meses a taxa de juros sera 15% ao ano");

let montante = Number(prompt("quanto voce deseja investir? ex: 12000"))
let meses = Number(prompt("quantos meses voce pretende investir?"))

if(montante <= 1000){
    resultado = (montante*(meses/12)*1.06).toFixed(2)
    alert(`O montante foi de ${resultado}`)
}else if(montante <= 5000){
    resultado = (montante*(meses/12)*1.09).toFixed(2)
    alert(`Seu investimento foi de ${resultado} em menos de 6 meses`)
}else if(montante <= 10000){
    resultado = (montante*(meses/12)*1.01)
    alert(`O seu investimento foi de ${resultado} em menos de 6 meses`)
}else if(montante >= 10001){
    resultado = (montante*(meses/12)*1.15).toFixed(2)
    alert(`O seu investimento foi de ${resultado} em menos de 6 meses`)
}
