const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna as chaves do objeto
console.log(Object.values(pessoa)) // retorna o valor do objeto
console.log(Object.entries(pessoa)) // entries retorna um array maior com chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // defineProperty atribui uma nova propriedade ao objeto
    enumerable: true, // será listado na lista de chaves do objeto, se botar false nao será listado dentro do objeto
    writable: false, // não pode ser modificado, a mesma coisa que Object.freeze()
    value: '01/01/2019' // atribuiu um valor à dataNascimento
})

pessoa.dataNascimento = '01/01/2017' // isso não vai acontecer por que writable está false
console.log(pessoa.dataNascimento) // aqui vai retornar o valor que foi atribuido na função defineProperty em value
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2= {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) /* o primeiro parametro é o objeto de destino, os outros vão colar o objeto dentro de dest 
( como no obj dest o A = 1 e no o2 tem A também, o valor será sobescrito e A valerá 4)*/

Object.freeze(obj)
obj.c = 123345 // não vai receber esse valor pois o objeto foi congelado e não poderá ser alterado.
console.log(obj)