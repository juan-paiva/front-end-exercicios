const inputItem = document.getElementById('novo-item');
const inputNome = document.getElementById('nome-pessoa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaItens = document.getElementById('lista-itens');
const contador = document.getElementById('contador');

// FUNÇÃO PARA ADICIONAR OS ITEM

function adicionarItem() {
    // PEGANDO VALORES DAS TAGS

    const textoItem = inputItem.value;
    const textoNome = inputNome.value;

    //CRIAÇÃO DO HTML DO ITEM A SER ADICIONADO
    const novoItem = document.createElement('div');
    novoItem.className = 'item disponivel';
    novoItem.innerHTML = `
    <article>
        <h3 style="color: blue;">Novo item Adicionado<h3>
        <p>Item: ${textoItem}</p>
        <p id="Exibir-Pessoa">Pessoa: ${textoNome} </p>

        <button id="btn-eu-trago">Eu trago!</button>

    </article>
    
    `;
    
    

    
    listaItens.appendChild(novoItem);
    const btnTrago = document.getElementById('btn-eu-trago');

    btnTrago.addEventListener('click', btnAddNome);
}

function btnAddNome() {
    const textoNome = inputNome.value;
    let textoExibido = document.getElementById('Exibir-Pessoa');
    let valorTexto = textoExibido.innerText;

    if (textoNome == '') {
        alert('Você não digitou um Nome para vincular esse item.')
    } else {
        valorTexto = 'Pessoa: ${textoNome} ';
    }
}



btnAdicionar.addEventListener('click', adicionarItem);





