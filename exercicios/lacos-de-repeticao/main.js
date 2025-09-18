// 1. Escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente, 
// o programa deverá solicitar novamente uma entrada do usuário;

// let numero;

// do {
//      numero = prompt('Digite o número 0 ou 1.');
// } while (numero != 0  && numero != 1);
    



// 2. Defina uma variável com uma "senha". Faça um laço de repetição que solicite a senha até 
// que o usuário insira a senha correta (utilize prompt para capturar a entrada do usuário);

// let senha;
// let senhaCorreta = 2345678;

// do {
//     senha = prompt('Digite sua senha: ')
// } while (senha != senhaCorreta);


// 3. Escreva um programa que solicite 5 números ao usuário e exiba ao final apenas o maior 
// deles;

let numero;
let numeroMaior = 0;
let contador = 0;

do {
    numero = prompt('Digite qualquer número')
    numero = Number(numero);
    contador = contador + 1;
    if (numero > numeroMaior) {
        numeroMaior = numero;
    }
} while (contador <= 4);

console.log(numeroMaior);
