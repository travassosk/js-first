// Coleção dinâmica de pares chave/valor
const produto = new Object // criar um objeto a aprtir do operador new, chamando uma função que no caso é object que é uma função construtora
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // carro.condutores foi deletado na linha 39, quando nao existir o JS retorna undefined
//console.log(carro.condutores.length) // vai gerar erro, pq não posso acessar algo que esteja undefined