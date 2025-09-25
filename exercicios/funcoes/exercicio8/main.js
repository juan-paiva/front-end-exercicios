// 8. Escreva uma função que aceita 3 (três) parâmetros numéricos e retorne uma string 
// informando qual é o relacionamento entre eles:
//    "Todos iguais" se a = b = c; "Dois iguais" se apenas dois forem iguais
//    "Todos diferentes" se todos forem diferentes
//    "Valores inválidos" se algum não for número

function relacionamento(valor1, valor2, valor3) {
    if (typeof valor1 == 'number' && typeof valor2 == 'number' && typeof valor3 == 'number' ) {

        if (valor1 == valor2 && valor1 == valor3 && valor2 == valor3) {
            console.log('Todos iguais');

        } else if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
            console.log('Todos Diferentes');

        } else {
            console.log('Dois iguais');

        }
    } else {
        console.log('Valores inválidos')
    }
}

console.log(relacionamento(1,1,-1));

