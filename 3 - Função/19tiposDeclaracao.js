console.log(soma(3, 4))

// function declaration (dessa forma mesmo se eu executar um codigo antes, o js reconhece pq ele executa as funções todas antes de executar o codigo)
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // dessa forma só depois da função

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // só pode depois da função