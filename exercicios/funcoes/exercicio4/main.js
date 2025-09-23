// 4. Escreva 4 (quatro) funções que aceitam 2 (dois) parâmetros cada, cada uma delas deve realizar
//  uma das 4 (quatro) operações matemáticas básicas (soma, subtração, divisão e adição), 
// **retorne** o resultado de cada operação em cada uma delas;

function soma(a, b) {  //DECLARAÇÃO NOMEADA
    return a + b;
}
const substracao = function(a, b) { // ATRIBUIÇÃO DE FUNÇÃO ANÔNIMA
    return a - b;
}

const multiplicacao = (a, b) => a * b; // ARROW FUNCTION SEM CHAVES E SEM O "RETURN"


const divisao = (a, b) => { // ARROW FUNCTION
        return a / b;
}

console.log(soma(5,20));
console.log(substracao(5,20));
console.log(multiplicacao(5,20));
console.log(divisao(5,20));
