fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice, arrayx) {
    console.log(`${indice}. ${nome} está em ${arrayx}`) // a funcao callback utilziando foreach, o primeiro parametro e´o valor, o segundo é o indice e o teceiro é o array propriamente dito
}

fabricantes.forEach(imprimir) // a funcao imprimir tem dois parametros, por isso imprime o indice e o nome
fabricantes.forEach(fabricante => console.log(fabricante)) // aqui eu dei so um parametro pra a funcao, entao ele so vai pegar os elements do array
fabricantes.forEach((nome, indice, array) => console.log(nome, indice, array))