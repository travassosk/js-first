function minimo (numero) {
    const minimo = Math.min(...numero)
    return minimo
}

console.log(minimo([19, 334, 4212, 545, 667, 1237]))



function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

console.log(minimo([22, 334, 4212, 545, 667, 1237]))

