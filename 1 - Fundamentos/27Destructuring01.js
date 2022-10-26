// novo recurso do ES2015
//destructuring da pra extrair um atributo denrto do objeto usando { }

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // extrair o atributo nome, idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // criar variavel com a letra n e a letra i
console.log(n, i)

const {sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
