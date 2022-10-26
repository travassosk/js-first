const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos) // (filhos, 'Fulano') pode adicionar um elemento assim dentro de todos
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))