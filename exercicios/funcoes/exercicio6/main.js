// 6. Escreva uma função que aceita 3 (três) parâmetros e retorna o maior valor dentre eles. 
// Implemente a verificação para garantir que todos os parâmetros sejam numéricos antes de fazer 
// a comparação.

function maiorValor(valor1, valor2, valor3) {

    if (typeof valor1 == 'number' && typeof valor2 == 'number' && typeof valor3 == 'number') {
        if (valor1 < valor2 && valor1 < valor3) {
            return valor1;
        }

        if (valor2 < valor1 && valor2 < valor1) {
            return valor2;
        }

        if (valor3 < valor2 && valor3 < valor1) {
            return valor3;
        }

    } else {
        return console.log('Um dos parâmetros digitados não é um número.')
    }
}

console.log(maiorValor(3,40,2.5));

