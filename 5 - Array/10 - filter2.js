const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const precosMaior = p => p.preco >= 500
const fragilidade = produto => produto.fragil == true

console.log(produtos.filter(precosMaior).filter(fragilidade))