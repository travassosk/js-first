const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no primeiro indice
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // vai adicionar a partir do indice 2, nao vai remover ninguem, vai adicionar bottas e masssa no indice 2
console.log(pilotos)

//remover
pilotos.splice(3, 1) // remover o indice 3, remove 1 unico elemento
console.log(pilotos)

// slice

const algunsPilotos1 = pilotos.slice(2) // novo array, a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai gerar um novo array, vai pegar do indice 1 até o indice 4, mas não vai incluir o indice 4.
console.log(algunsPilotos2)
