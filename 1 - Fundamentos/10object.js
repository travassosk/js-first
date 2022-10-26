/* objeto é uma coleção de chaves e valores 

*/

const prod1 = {} // objeto é representado por {} aqui é um objeto vazio sem atribuição de valores
prod1.nome = 'Celular Ultra Mega' // aqui atribui um valor de forma dinamica para esse objeto
prod1.preco = 4998.90 // aqui atribui um valor de forma dinamica para esse objeto
prod1['desconto'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla:1,                   // um objeto pode ter varios objetos dentro dele
        obj2: {
            blabla: 2
        }
    }
}



console.log(prod2.nome)
console.log(prod2.obj.obj2.blabla)