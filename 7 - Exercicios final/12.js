function removerPropriedade (objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}

console.log(removerPropriedade({a: 2, b: 3}, 'b'))