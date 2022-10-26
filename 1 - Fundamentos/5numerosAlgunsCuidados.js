console.log(7 / 0) // qualquer numero dividido por 0 eh Infinity
console.log(`10` / 2)
console.log(`3` + 2) // no mundo da string a concatenação que faz sentido por causa do +
console.log(`3` - 2)  // aqui subtrai pq eh anormal pra string subtrair, o numero tem preferencia
console.log('Show!' * 2) //not a number
console.log(0.1 + 0.7) // gera uma imprecisao para processar mais rapido
// console.log(10.toString())  nao consegue assim chamar o literal direto pra função, mas consegue entre ( )
console.log((10).toFixed(2)) // pode fazer assim o literal entre parentese
console.log((10).toString())
