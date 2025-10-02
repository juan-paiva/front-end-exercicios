let inputvalue = document.getElementById('cor');

inputvalue.onchange = function() {
    let valor = inputvalue.value
    let body = document.querySelector('body');

    if (valor == 'Rosa') {
        console.log('Rosa');

        
        let novaCor = body.style.backgroundColor = 'pink';

    } else if (valor == 'Preto') {
        console.log('Preto')

        let body = document.querySelector('body');
        let novaCor = body.style.backgroundColor = 'black';
    } else if (valor == 'Verde') {
        console.log('Verde')

        let body = document.querySelector('body');
        let novaCor = body.style.backgroundColor = 'green';
    }
}

console.log(inputvalue.value);