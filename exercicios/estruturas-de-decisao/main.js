// 1. Faça um script em JavaScript que solicite um número ao usuário e verifique se ele é maior do que 10.

// let numero = prompt('Digite um número: ');

// if (numero > 10) {
//     console.log('Este número é MAIOR que 10.');
// } else {
//     console.log('Este número não é MENOR que 10.');
// }

// 2. Faça um script em JavaScript que solicite um número ao usuário e verifique se ele está entre 532 e 743.

// let numeroEntre = prompt('Digite um número: ');

// if (numeroEntre > 532 && numeroEntre < 743 ) {
//     console.log('O número digitado está entre 532 e 743.');
// } else {
//     console.log('O número informado não está entre 532 e 743.');
// }

// 3. Faça um script em JavaScript que solicite uma senha ao usuário e verifique se ela é igual a uma string 
// armazenada em uma variável no seu código.

// let senha = prompt('Digite sua senha: ');
// let senhaCorreta = 2345678 // camel-case
// // let senha_correta = '2345678' // snake-case

// senha = Number(senha); // conversão de variável string para number.
// console.log(typeof senha);

// if (senha == senhaCorreta) {
//     console.log('Login efetuado com sucesso.');
// } else {
//     console.log('Senha incorreta.');
// }

// 4. Para uma pessoa realizar um consórcio em um banco, é necessário que ela tenha 18 anos ou mais e possua
//  renda mensal de 2 (dois) salários mínimos. Faça um script em JavaScript que solicite a idade e a renda mensal 
// do usuário e exiba a mensagem se ele está apto ou não realizar um consórcio

// let idade = prompt('Digite sua idade: ');


// if (idade >= 18 && renda >= 3036) {
//     console.log('Você pode fazer um consórcio. ');
// } else {
//     console.log('Você não pode fazer um consórcio.');
// }

// if ( idade >= 18) {
//     let renda = prompt('Digite sua renda salarial: ');

//     if (renda >= 3036) {
//         console.log('Você está apto.');
//     } else {
//         console.log('Você não tem renda suficiente.');
        
//     }
// } else {
//     console.log('Infelizmente você não tem a idade necessária');
    
// }

// 5. Em um concurso para professor em uma instituição de ensino, os seguintes critérios são considerados 
// com as respectivas pontuações:
	// - Experiência: até 5 anos = 10 pontos; 5 anos ou mais = 20 pontos;
	// - Formação: superior = 10 pontos; pós-graduação = 20 pontos; mestrado = 30 pontos; doutorado = 40 pontos;
	// Faça um script em JavaScript que solicite a experiência e a formação do candidato, e calcule e exiba qual 
    // seria a sua pontuação para o concurso.

// let experiencia = prompt('Digite sua experiencia profissional em anos:');

// let pontos = 0;


// if (experiencia <= 4) {
//     pontos += 10;
//     console.log('recebeu 10 pontos.');
// } else if (experiencia >= 5){
//     pontos += 20;
//     console.log('recebeu 20 pontos.');
// }

// let formacao = prompt('Digite sua formação(superior, pos, mestrado ou doutorado):');

// if (formacao == 'superior') {
//     pontos += 10
//     console.log('recebeu 10 pontos');
// } else if (formacao == 'pos') {
//     pontos += 20
//     console.log('recebeu 20 pontos.');
// } else if (formacao == 'mestrado') {
//     pontos += 30
//     console.log('recebeu 30 pontos.');
// } else if (formacao == 'doutorado') {
//     pontos += 40
//     console.log('recebeu 40 pontos.');
// }

// console.log(`Seus pontos foram: ${pontos}`);


// 6. Faça um script em JavaScript que solicite uma nota ao usuário e verifique se ela está entre 7.0 e 10.0.

// let nota = prompt('Digite sua nota: ');

// if (nota >= 7 && nota <= 10) {
//     console.log('Esta aprovado.');
// } else {
//     console.log('Você não foi aprovado.');
    
// }

// 7. Para uma pessoa obter financiamento de veículo em uma concessionária, é necessário que ela tenha 21
//  anos ou mais e possua renda mensal de pelo menos R$ 3.000,00. Faça um script em JavaScript que solicite a
//  idade e a renda mensal do usuário e exiba uma mensagem informando se ele está apto ou não para obter o 
// financiamento.

// let idade = prompt('Digite sua idade: ');
// let renda = prompt('Digite sua renda salarial: ');

// if (idade >= 21 && renda >= 3000) {
//     console.log('Você pode fazer o financiamento do seu veículo. ')
// } else {
//     console.log('Você NÃO pode fazer o financiamento do seu veículo.')
// }

// 8. Em um programa de bolsa de estudos universitária, os seguintes critérios são considerados com as respectivas
//  pontuações:
// 	- Renda familiar: 
// 		- até R$ 2.000 = 30 pontos;
// 		- de R$ 2.001 a R$ 4.000 = 20 pontos;
// 		- acima de R$ 4.000 = 10 pontos;
// 	- Desempenho acadêmico:
// 		- média até 6.9 = 5 pontos;
// 		- média de 7.0 a 8.4 = 15 pontos;
// 		- média de 8.5 a 10.0 = 25 pontos;
		
// Faça um script em JavaScript que solicite a renda familiar e a média acadêmica do estudante, calcule e exiba 
// qual seria a sua pontuação total para concorrer à bolsa de estudos.

// let renda = prompt('Digite sua renda familiar: ');
// let media = prompt('Digite sua média: ');

// let pontosRenda = 0;
// let pontosMedia = 0;

// if (renda <= 2000) {
//     pontosRenda = 30;
// } else if (renda >= 2001 && renda <= 4000) {
//     pontosRenda = 20;
// } else if (renda > 5000) {
//     pontosRenda = 10;
// }

// if (media <= 6.9) {
//     pontosMedia = 5;
// } else if (media >= 7 && media <= 8.4) {
//     pontosMedia = 15;
// } else if (media > 8.5 && media < 10) {
//     pontosMedia = 25;
// }

// let totalPontos = pontosRenda + pontosRenda;
// console.log('Sua pontuação foi: ', totalPontos);