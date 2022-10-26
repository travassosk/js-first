// pessoa -> 123 (pessoa aponta para endereço de memoria) -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // a partir daqui o objeto nao pode ser mexido, pois esta´congelado então não pode deletar, alterar ou adicionar um atributo.
pessoa.nome = 'Maria'
console.log(pessoa.nome)


const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)