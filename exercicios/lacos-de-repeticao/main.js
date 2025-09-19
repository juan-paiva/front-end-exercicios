// 1. Escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente, 
// o programa deverá solicitar novamente uma entrada do usuário;

// let numero;

// do {
//      numero = prompt('Digite o número 0 ou 1.');
// } while (numero != 0  && numero != 1);
    



// 2. Defina uma variável com uma "senha". Faça um laço de repetição que solicite a senha até 
// que o usuário insira a senha correta (utilize prompt para capturar a entrada do usuário);

// let senhaDigitada;
// let senhaCorreta = 2345678;

// do {
//     senhaDigitada = prompt('Digite sua senha: ')
// } while (senhaDigitada != senhaCorreta);


// 3. Escreva um programa que solicite 5 números ao usuário e exiba ao final apenas o maior 
// deles;

// let numero;
// let numeroMaior = 0;
// let contador = 0;

// do {
//     numero = prompt('Digite qualquer número')
//     numero = Number(numero);
//     contador = contador + 1;
//     if (numero > numeroMaior) {
//         numeroMaior = numero;
//     }
// } while (contador <= 4);

// console.log(numeroMaior);




// EXERCICIOS FOR




// 1. Escreva um programa, utilizando for, que exiba os números de 0 a 100;

// for(let cont = 0; cont < 101; cont = cont + 1) {
//     console.log(cont);
// }

// 2. Escreva um programa em que o usuário insira o peso de 10 pessoas e calcule a média aritmética 
// do peso delas;

let pesoPessoas = 0;
let pesoAtual = 0;

for(cont = 1; cont < 11; cont = cont + 1) {
    pesoAtual = prompt('Digite o peso da pessoa número ' + cont);
    pesoAtual = Number(pesoAtual);
    pesoPessoas = pesoPessoas + pesoAtual;
}

console.log('A média do peso das 10 pessoas é: ', (pesoPessoas / 10));

// 3. Escreva um programa em que o usuário insira 10 números, exiba a contagem de quantos números 
// inseridos são maiores do que 50;

// let entrada;
// let numeroMaior = 0;

// for(cont = 0; cont < 9; cont = cont + 1) {
//     entrada = prompt('Digite 10 números: ');
//     entrada = Number(entrada);

//     if ( entrada > 50) {
//         numeroMaior = numeroMaior + 1;
//     }
// }

// console.log('A quantidade de números maiores que 50 é: ', numeroMaior);




// EXERCICIOS FOR COMPLEMENTARES


// 1. Escreva um programa que calcula a soma dos números de 0 até _n_, sendo _n_ um número 
// positivo maior que 1 inserido pelo usuário;

// let valorDigitado = 1
// let somaValores = 0;

// for(let cont = 0; cont <= valorDigitado; cont = cont + 1) {

//     if (valorDigitado == 1) {
//         valorDigitado = prompt('Digite qualquer número: ');
//         valorDigitado = Number(valorDigitado);
        
//     }
    
//     somaValores = somaValores + cont
    
// }

// console.log('A soma dos número de 0 a ', valorDigitado, 'é ',somaValores);


// 2. Escreva um programa que realiza a soma de dois números inseridos pelo usuário até que ele
//  digite a palavra "encerrar";

// let encerrar;
// let numero1 = 0;
// let numero2 = 0;

// while (encerrar != 'encerrar') {
//     numero1 = prompt('Digite o primeiro número para somar: ');
//     numero1 = Number(numero1)
//     numero2 = prompt('Digite outro número: ');
//     numero2 = Number(numero2)

//     console.log('A soma de', numero1, 'e', numero2, 'é', (numero1 + numero2));
//     encerrar = prompt('Deseja ecerrar ?, (encerrar)');
// }


// 3. Escreva um programa que lê 5 números fornecidos pelo usuário e identifique o maior e o menor deles;

// let numeroMaior = 0;
// let numeroMenor = 0;
// let numeroAtual = 0;

// for(let cont = 0; cont < 5; cont = cont + 1) {
//     numeroAtual = prompt('Digite 5 números: ');
//     numeroAtual = Number(numeroAtual);

//     if (numeroAtual < numeroMenor) {
//         numeroMenor = numeroAtual
//     }
//     if (numeroAtual > numeroMaior) {
//         numeroMaior = numeroAtual
//     }
// }
// console.log('Dos números digitados, o maior é', numeroMaior,'e o número menor é', numeroMenor);