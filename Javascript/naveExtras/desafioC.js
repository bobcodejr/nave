/*Faça um programa para um caixa que receba quantos produtos voce quiser registrar, cada produto
terá: nome, valor e "se tem desconto". Os produtos com desconto receberam 10% no pagamento
em dinheiro e 5% no pagamento em cartão. Após as compras o total da compra será deduzido do valor pago 
e exibiremos o troco na tela. */
let a = 0;
let tot = 0;
alert("Bem vindo ao supermercado Champions")

let pagamento = prompt(`Qual a forma de pagamento - Dinheiro ou cartão?`)
let quantos_produtos = +prompt(`Insira a quantidade de produtos`)
let total = 0;

for(i = 0; i < quantos_produtos; i++){

    let nome, valor
    if (a == 0){
        nome = +prompt(`Digite o produto que vc quer adicionar! `);
        a++
    }else {
        nome = +prompt('Digite outro produto')
    }
    
    valor = +prompt(`Digite o valor do produto! `);
    desconto = prompt(`Tem desconto? `);
    
    if(pagamento == "dinheiro" && desconto == "sim"){
        sub = valor*10% - valor;
        tot+=sub 
    }else if(pagamento == "cartao" && desconto == "sim"){
        sub = valor*5% - valor;
        tot+=sub
    }else{
        tot+=valor
    }
}

alert(`O total da compra foi de ${tot}`)