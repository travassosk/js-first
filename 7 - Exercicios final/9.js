function repeticao (repetira, repeticao) {
    let resultado = []

    for (let i = 0; i < repeticao; i++){
        resultado.push(repetira)
    }
    return resultado
}
console.log(repeticao('Código', 10))

function repetir (item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir('Kiwi', 20))