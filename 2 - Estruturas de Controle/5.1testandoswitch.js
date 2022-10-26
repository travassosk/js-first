const imprimirResultado = function (nota) {
    switch (nota) {
        case 10:
            console.log('Quadro de Honra')
        break
        case 9:
            console.log('Aprovado')
        break
        case 8: case 7: case 6: case 5:
            console.log('Reprovado')
        break
        default:
            console.log('Nota inválida')
    }  
}

imprimirResultado(100)