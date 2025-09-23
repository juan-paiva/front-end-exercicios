// 5. Escreva uma função que aceita 2 (dois) parâmetros, um valor (inteiro) e um desconto 
// (porcentagem), retorne o valor com o desconto aplicado;

function calculaDesconto(valor , percentualDesconto) {
    let valorDoDesconto = (valor * percentualDesconto) / 100;
    let valorFinal = valor - valorDoDesconto;
    return valorFinal;
}

console.log(calculaDesconto(2000,20));