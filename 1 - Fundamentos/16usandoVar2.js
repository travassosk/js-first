var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)  // o 2 subscreveu dentro e fora, pq em var nao tem limite de escopo, ele ignora os blocos exceto na function
}
console.log('fora =', numero)