const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // criou o objeto filha tendo prototipo para objeto pai em vez de object.prototype
filha1.nome = 'Ana'
console.log(filha1.nome)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Herança: ${key}`) // true retorna os atributos do objeto filha2 se for false retorna os atributos do objeto pai
    
}

