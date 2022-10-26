function maior (num1, num2) {
    return num1 >= num2
}

console.log(maior(5, 9))
console.log(maior(5, 2))

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

console.log(maiorOuIgual(5, 9))
console.log(maiorOuIgual(5, 2))