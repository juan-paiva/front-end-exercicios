let livro = {
	titulo: 'Memórias do escrivão Isaías Caminha',
	autor: 'Lima Barreto',
	ano: 1909,
	ISBN: '9786599536953',
    emprestar: () => {
        console.log('você pegou emprestado o livro')
    }
}

console.log(typeof livro.emprestar);
livro.emprestar()
