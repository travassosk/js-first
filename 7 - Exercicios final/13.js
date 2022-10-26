function array (elementos) {
    const resultado = []
    for (let item of elementos) {
        if (typeof item === 'number') {
            resultado.push(item)
        }
    }
    return resultado
}

const array1 = [1,2,3,'oi']
console.log(array(array1))

function filtrarNumeros(array) {
    return array.filter(item => typeof item === 'number')
}

console.log(filtrarNumeros(array1))