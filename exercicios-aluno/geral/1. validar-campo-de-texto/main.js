let inputNome = document.getElementById('Nome');
let btnAdicionar = document.getElementById('btn-verificar');

btnAdicionar.onclick = function() {
    let textoNome = inputNome.value;
    if (textoNome == '') {
        alert('Você não digitou um nome válido!')
    } else {
        alert(`Nome ${textoNome} adicionado.`)
    }
}

