function salario (qtdH, recebeH) {
    const salarioBruto = qtdH * recebeH
    const salarioLiquido = salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
}

console.log(salario(150, 40.5))