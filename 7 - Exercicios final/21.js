function contarPalavras (string) {
    const palavras = string.split(' ')
    return palavras.length
}

console.log(contarPalavras('Oi eu sou Kadu'))


function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
    }

    console.log(removerVogais("Fundamentos"))
