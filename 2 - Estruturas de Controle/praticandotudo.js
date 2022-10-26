function removerUltimo (array) {
    let start = 0
    while (start <= 2) {
        array.pop()
        start++
    }
}

let array1 = [1,2,3,4,5,6,10]

removerUltimo(array1)
console.log(array1)