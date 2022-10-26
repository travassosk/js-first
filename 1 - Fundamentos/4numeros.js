const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed eh o numero de casas apos o .
console.log(media.toString()) //converter em string e se indexar 2 vira binario

console.log(typeof media)
console.log(typeof Number) // Com o N maisculo eh uma funcao e o number minusculo eh o tipo do dado tipo numerico*/
