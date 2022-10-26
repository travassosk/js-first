//destructuring da pra extrair um atributo denrto do array usando []


const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // ele quer pegar o segundo elemento do segunro array e dar o nome de nota
console.log(nota)


const [b1, b2, b3, b4, b5] = [0, 1, 2, 3, 4]
console.log(b1)
console.log(b5)