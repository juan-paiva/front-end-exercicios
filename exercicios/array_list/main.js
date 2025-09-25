// Array com horas de uso do Instagram para cada dia da semana
let usoDiasDaSemana = [1.2, 3.4, 3, 4.1, 5.2, 2.7, 1.5];

// Acessa o valor do primeiro elemento do array
usoDiasDaSemana[0]

// Atribui o valor do primeiro elemento do array à uma variável
let horas = usoDiasDaSemana[0];

// Acessa o quarto elemento do array e dá saída a ele no console
console.log(usoDiasDaSemana[3]);

// Acessa o elemento de índice resultante da operação dentro dos colchetes
console.log(usoDiasDaSemana[2 + 2]);

// Realiza operação com valores armazenados nos arrays e atribui resultado à uma variável
let doisPrimeirosDias = usoDiasDaSemana[0] + usoDiasDaSemana[1];

console.log(usoDiasDaSemana.lenght);

let dia = "terça-feira";
console.log(typeof dia.toUpperCase);
console.log(dia.toUpperCase());

let sequencia = [1, 2, 3];
sequencia.push(4);
sequencia.push(5);
console.log(sequencia);
// → [1, 2, 3, 4, 5]
console.log(sequencia.pop());
// → 5
console.log(sequencia);
// → [1, 2, 3, 4]