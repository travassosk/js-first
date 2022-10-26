var a = 3
let b = 4

var a = 30 // o var você consegue redeclarar de certa forma
b = 40 // se colocar let b = 40 vai dar erro quando rodar por quê let não pode ser redeclarada no mesmo escopo

console.log(a, b)

a = 300
b = 400

console.log(a,b)

const c = 5 // usar const quando a variável não precisa mudar
console.log(c)
//c = 50 //não posso trocar o valor da constante, ela sempre será 5 se eu colocar vai dar erro