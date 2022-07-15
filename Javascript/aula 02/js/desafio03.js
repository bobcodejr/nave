alert("Bem vindo ao investimento maravilha!");
alert("temos varias opções de investimentos de acordo com o seu montante!");
alert("Caso vc invista menos de 1000 a taxa de juros sera 6% ao ano");
alert("Caso vc invista menos de 5000 a taxa de juros sera 9% ao ano");
alert("Caso vc invista menos de 10.000 a taxa de juros sera 12% ao ano");

let capital = Number(prompt("Qual o seu investimento hoje?"));
//let montante = capital + juros;

if (capital <= 1000) {
  console.log("Menor ou igual a 1000");
  juros = capital * 1.06;
  alert(`Redimento ao ano R$ ` + (capital * 0.06).toFixed(2));
  alert(`O seu montante eh igual a R$ ` + juros.toFixed(2));
} else if (capital > 1000 && capital <= 5000) {
  console.log("Maior que 1000 e menor ou igual a 5000");
  juros = capital * 1.09;
  alert(`O seu montante eh igual a: ` + juros.toFixed(2));
} else if (capital >= 5001 && capital <= 10000) {
  console.log("Maior que 5001 e menor que 10000");
  juros = Number(capital * 1.12);
  alert(`-----------------O seu montante eh igual a: ---------` + juros.toFixed(2));
}