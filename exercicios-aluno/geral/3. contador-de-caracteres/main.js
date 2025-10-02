let valor = document.getElementById('textarea');
console.log(valor.value);

function contador() {
    console.log(valor);
}

valor.addEventListener('imput', contador);