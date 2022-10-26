let num1 = 1
let num2 = 2

num1++ // acrescenta 1 valor ao valor da variavel
//++num1 // pode usar assim, desse jeito o programa vai rodar priemiro pq o ++ vem antes
console.log(num1)

--num1
//num1-- pode rodar assim mas o programa vai rodar primeiro o numero para depois tirar
console.log(num1)


console.log(++num1 === num2--) // dessa forma é verdadeiro por que ++num 1 acresceu 1 === num 2 que é 2, comparou antes de decrementar pq veio o -- depois
console.log(++num1 === --num2) // assim sera falso pq o decremento foi feito antes
console.log(num1 === num2)