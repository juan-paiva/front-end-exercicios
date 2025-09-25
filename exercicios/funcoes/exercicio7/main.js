// 7. Escreva uma função que aceita 1 (um) parâmetro e exiba no console: "Número positivo" 
// se for um número maior que zero; "Número negativo" se for um número menor que zero; "Zero" 
// se for exatamente zero; "Não é um número" se não for um valor numérico.

function numero(valor1) {
    if (valor1 > 0) {
        console.log('número positivo')
    } else if (valor1 < 0) {
        console.log('número negativo')
    } else if (valor1 == 0) {
        console.log('não é um número')
    }
}

console.log(numero(1231231));

