const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


// se return false ele filtra tudo e nao passa nada, se for true ele retorna todos


console.log(produtos.filter(function(p) {  
    return p.preco > 2498
}))