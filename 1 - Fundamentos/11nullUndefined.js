let valor // não inicializar, ela não foi definida
console.log(valor) // quando nao atribui nada a variavel, o valor dela é undefined

valor = null // ausencia de valor, nao foi apontada pra nenhum objeto na memoria, ela ta vazia mas ela foi definida
console.log(valor)
// console.log(valor.toString()) // se eu executar isso vai dar erro, por que não posso executar a propriedade de NULO

const produto = {}
console.log(produto.preco) // vai dar undefined por que não existe preco dentro de produto, mas produto está definido e ele não é nulo
//console.log(produto.preco.a) // vai dar erro por que nao tem propriedade a em algo que está indefinido que é o preço
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, deixar o proprio sistema dar undefined
console.log(!!produto.preco)
// delete produto.preco  se quiser tirar o atributo de um objeto usa o delete
console.log(produto)

produto.preco = null // sem preço
console.log(produto.preco)
console.log(produto.preco)
console.log(produto)
