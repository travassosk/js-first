
/*function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}*/

function somarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}

console.log(somarNumeros([10, 10, 10]))

