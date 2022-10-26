{ 
    { 
        { 
            { var sera = 'Será???'  // criar uma var dentro de um bloco que não é função, se eu chamar ela fora do bloco ela ficará visível
            console.log(sera)
        } 
    } 
} 
}
console.log(sera)

function teste() {
    var local = 123 // criar var dentro da function, ela só é visível dentro da function
}

console.log(teste())
// console.log(local)   // se eu chamar a var fora da função vai dar erro