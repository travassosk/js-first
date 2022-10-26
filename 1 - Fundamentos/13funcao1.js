// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o a = 2 e o b vai ser undifined, por isso será NaN (not a number)
imprimirSoma(1, 10, 4, 5, 6, 7, 8) // ele vai somar os 2 primeiros, depois ignora o resto
imprimirSoma() // parametro vazio NaN

// Funcao com retorno
    function soma(a, b = 0) {
        return a + b
    }
    
console.log(soma(2,3))
console.log(soma(2)) // pq ele ta tratando o b = 0 por isso é 2
console.log(soma()) // o a é undefined ele vai tentar somar com o 0 entao é not a number