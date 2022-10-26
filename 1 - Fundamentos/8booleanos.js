let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!!true) // true
console.log(!!false) // false

isAtivo = 1
console.log(!isAtivo) // transformar em falso
console.log(!!isAtivo) //transformar em verdadeido !! significa nao nao = verdadeiro

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // se do outro lado for uma expressao verdadeira tudo vai ser verdadeiro

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // se do outro lado for uma expressao falsa tudo vai ser falso

console.log('pra finalizar')
console.log(!!('' || null || 0 || 'epa')) // um deles eh verdadeiro entao eh verdadeiro
console.log(!!('' && null && 0 && 'epa')) // o E precisa de todos verdadeiros e so temos o EPA

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // caso nome nao esteja preenchido, use Desconhecido como valor

let nome1 = ''
console.log(nome1 || 'Desconhecido')