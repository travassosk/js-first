const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// para nao repetir varias vezes, varios objetos utilizamos a função factory para resolver esse problema
// função factory é uma função que sempre retorna um objeto
// Factory simples
function criarPessoa() {
    return {
        nome:'Ana',
        sobrenome:'Silva'
    }
}
console.log(criarPessoa())