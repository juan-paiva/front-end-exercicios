// 3. Escreva uma função que aceita 2 (dois) parâmetros e **retorna** o menor valor dentre eles;
// - Melhoria opcional: verificar se os parâmetros passados são realmente numéricos ou não e 
// só realizar a comparação caso sejam;

const menorvalor = function(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log();
console.log(menorvalor(30,820));
console.log(menorvalor(1234123,123414));


menorvalor(2,20,30)

menorvalor(5,20)