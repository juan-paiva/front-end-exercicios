// Exibir no console as horas de uso para cada dia da semana de maneira formatada, adicionando um 
// sinal verde, amarelo ou vermelho, de acordo com um critério seu de horas adequadas de uso da rede,
//  por exemplo:

// - 0-1 hora por dia = verde
// - 1-3 horas por dia = amarelo
// - 3 horas ou mais por dia = vermelho

let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; // Domingo, segunda...
let diasDaSemana = [
    'Domingo      ', 
    'Segunda-feira', 
    'Terça-feira  ', 
    'Quarta-quinta',
    'Quinta-feira ', 
    'Sexta-feira  ', 
    'Sábado       '
];

const indicadorDeUso = (numeroDehoras) => {
    if (numeroDehoras <= 1) {
        return '🟢';
    } else if ( numeroDehoras <= 3) {
        return '🟡'
    } else {
        return '🔴'
    }
}

for (let cont = 0; cont < usoDiasDaSemana.length; cont ++) {
    let farol = indicadorDeUso(usoDiasDaSemana[cont]);
    let dia = diasDaSemana[cont];
    let horas = usoDiasDaSemana[cont];
    let mensagem = (horas > 1) ? 'horas de uso' : 'hora de uso'; // Operador ternário

    // let mensagem = 'hora de uso';

    // if (horas > 1) {
    //     mensagem = 'horas de uso';
    // }

    console.log(`${farol} 📅 ${dia} | ${horas.toFixed(2)} ${mensagem}`);
}

