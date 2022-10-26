/* array você consegue agrupar multiplos valores de uma forma linear numa estrutura só
é uma estrutura indexada [0] a partir de um numero, do primeiro elemento a partir do numero 0 e separados por , para a separação dos elementos
pode ser usado qualquer tipo, numero, string, null, bollean...etc (dados heterogeneos)
o array nao tem tamanho fixo, ele cresce e diminui.
*/
const valores = [7.7, 8.9, 6.3, 9.2] // array com 4 posições cada posição é um indice e é representado por []
console.log(valores[0], valores [3]) // acessar o indice 0 e o indice 3 ou seja 7.7 e 9.2
console.log(valores[4]) // nao tem o indice 4 entao é undefined, por que o array está definido mas não existe o o elemento 4 nele, entao é undefined

valores[4] = 10 // adicionou um elemento no array na posição 4 que é 10
console.log(valores)
console.log(valores.length) // quantidade de elementos dentro do array


valores.push({id: 3}, false, null, 'teste') // o ideal é ter um array de tipo de dados homogeneos pra deixar seu codigo organizado, dessa forma ai é ruim por que mistura varios tipos de dados
console.log(valores)

console.log(valores.pop()) // pop = pegar o ultimo valor do array, retirar do array e retornar ele
delete valores [0] // deletar um elemento do array, outra forma de retirar um elemento do array
console.log(valores)

console.log(typeof valores) //array em javascript é do tipo Object