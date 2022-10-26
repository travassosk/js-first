// simulando o map

const numeros = [2, 3, 6, 5, 10]
let novoArray = []

for (let i = 0; i < numeros.length; i++) {
    novoArray.push(numeros[i] * 2)
}

console.log(novoArray)

// Map ( todo map retorna um novo array )

const novoArrayMap = numeros.map(function(numero) {
    return numero * 2
})

console.log('novoArrayMap', novoArrayMap)

// Map com arrow function e retorno imediato

const arrayMapArrow = numeros.map(numero => numero * 2)
console.log('arrow', arrayMapArrow)

// exemplo string

const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano de Tal']
const nomesMinusculos = nomes.map(function (nome) {
    return nome.toLowerCase()
})

console.log(nomesMinusculos)

// Filter retorna valor booleano e também um novo array
// Simulando Filter
let mult2 = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        mult2.push(numeros[i])
    }
}

// usando Filter

const numerosFiltrados = numeros.filter(function(numero) {
    return numero % 2 == 0
})

console.log('numerosFiltrados', numerosFiltrados)

// filter arrow function

const numerosFiltrados2 = numeros.filter(numero => numero % 2 == 0)
console.log('numerosFiltrados2', numerosFiltrados2)

// usar filter e map juntos

const arrayMapFilter = numeros.filter(numero => numero % 2 == 0).map(numero => numero * 2)
console.log('ArrayMapFilter', arrayMapFilter)

// Reduce não retorna um array apenas, pode retornar várias coisas
// simulando o reduce

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log('ReduceFor', soma)

// com Reduce

const somaReduce = numeros.reduce(function(valorAcumulador, valorArray) {
    return valorAcumulador + valorArray
}, 0) // esse 0 é o valor inicial que vai somar com cada elemento do array, valorAcumulador


