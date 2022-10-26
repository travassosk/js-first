/*function despesasTotais (itens) {
    return itens
           .map(item => item.preco)
           .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}
*/

function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}


console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))