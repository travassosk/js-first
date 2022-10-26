function receberPrimeiroEUltimo (elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

const array = [1,2,3,4,5,6,7,8,9,100]
console.log(receberPrimeiroEUltimo(array))