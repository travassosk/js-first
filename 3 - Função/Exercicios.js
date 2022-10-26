/*function soma (n1 = 2, n2 = 3) {
    console.log(n1 + n2)
    console.log(n1 - n2)
    console.log(n1 * n2)
    console.log(n1 / n2)
}
soma()

// -------------------------------------------------------------------------------------------------------------------

function triangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Equilátero')
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log('Isósceles')
    } else if (lado1 != lado2 && lado2 != lado3) {
        console.log('Escaleno')
    }
}

triangulo(1,1,1)
triangulo(2,3,3)
triangulo(2,3,6)

// -------------------------------------------------------------------------------------------------------------------

function exp (base, expoente) {
    return base ** expoente
}

console.log(exp(3, 2))

// -------------------------------------------------------------------------------------------------------------------

function div (n1, n2) {
    return n1 % n2
}

console.log(div(10, 2))

// -------------------------------------------------------------------------------------------------------------------

function arredondar (n1, n2) {
    const total = n1 + n2
    console.log(`R$ ${total.toFixed(2).replace('.' , ',')}`)
}

arredondar(0.1, 0.3)
// -------------------------------------------------------------------------------------------------------------------

function jurosSimples (capital, juros, tempo) {
    const montante = capital * (1 + juros * tempo)
    return console.log(`R$ ${montante}`)
}

jurosSimples(1000, 0.1, 12)

function jurosCompostos (capital, juros, tempo) {
    const montante2 = capital * (1 + juros) ** tempo
    return console.log(`R$ ${montante2.toFixed()}`)
}

jurosCompostos(1000, 0.1, 12)

// -------------------------------------------------------------------------------------------------------------------

function bhaskara (ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c
    console.log(`Delta = ${delta}`)

    const valorRaiz1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    const valorRaiz2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        if (delta < 0) {
            console.log('Não existem raízes reais')
        } else {
            console.log(`Raiz 1 = ${valorRaiz1.toString().replace('.' , ',')}`)
            console.log(`Raiz 2 = ${valorRaiz2.toString().replace('.' , ',')}`)
        }
}

bhaskara(3, -15, 12)
bhaskara(9, -24, 16)

//-----------------------------------------------------------------------------------------------

function getInteiro(num) {
    if (num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(getInteiro(3))
console.log(getInteiro(5))

//-----------------------------------------------------------------------------------------------

function bissexto (ano) {
    if (ano <= 0) {
        return 'Ano inválido'
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    }
}

console.log(bissexto(4000))
console.log(bissexto(0))
//-----------------------------------------------------------------------------------------------

function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))

// ------------------------------------------------------------------------------------------------------

function diaUtil (num) {
    switch (Math.floor(num)) {
        case 1: case 7:
            return 'Fim de semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'
        default:
            return 'Dia inválido'
    }
}

console.log(diaUtil(1))

// ------------------------------------------------------------------------------------------------------

function feira (fruta) {
    switch (fruta) {
        case 'Maçã':
            return 'Não vendemos esta fruta aqui'
        case 'Kiwi':
            return 'Estamos com escassez de Kiwis'
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro'
    }
}

console.log(feira('Maçã'))
console.log(feira('Kiwi'))
console.log(feira('Melancia'))
console.log(feira('Abacaxi'))
*/
// ------------------------------------------------------------------------------------------------------

//  hatch, retorne: “Compra efetuada com sucesso”
//  retorne: “Tem certeza que não prefere este modelo?"
// Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

/*function comprarCarro (compra) {
    switch (compra) {
        case 'Hatch':
            return 'Compra efetuada com sucesso'
        case 'Sedan': case 'Motocicleta': case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com esse tipo de Automóvel aqui'
    }
}

console.log(comprarCarro('Hatch')) */

/*function calculadora(numero1, operacao, numero2) {
    switch (operacao) {
        case '+':
           return numero1 + numero2
        case '-':
            return numero1 - numero2
        case '*':
            return numero1 * numero2
        case '/':
            return numero1 / numero2
        default:
            return 'Número Inválido'
    }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, '/', 2))
console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '**', 2))*/

/*const aumento = (salario, reajuste) => {
    switch (reajuste) {
        case 'A':
            const planoA = salario * 1.1
            return `R$ ${planoA.toFixed(3)}`
        case 'B':
            const planoB = salario * 1.15
            return `R$ ${planoB.toFixed(3)}`
        case 'C':
            const planoC = salario * 1.2
            return `R$ ${planoC.toFixed(3)}`
        default:
            return 'Reajuste inválido'
    }
}

console.log(aumento(1.000, 'A'))
console.log(aumento(2.500, 'B'))
console.log(aumento(5.352, 'C')) */

/*function transformarExtenso (numero) {
    switch (numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4: 
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(transformarExtenso(5)) */

/*function pedidos (codigo, quantidade) {
    switch (codigo){
        case 100:
            let cachorroQuente = 3 * quantidade
            let cupomCachorro = 0.2
            let ValorDesconto = cachorroQuente - (cachorroQuente * cupomCachorro)
        if (quantidade > 10) {
                return `Cachorro Quente (${quantidade}) = R$ ${ValorDesconto.toFixed(2).replace('.', ',')}`
        } else { return `Cachorro Quente (${quantidade}) = R$ ${cachorroQuente.toFixed(2).replace('.', ',')}`}   
        case 200:
            let hamburguerSimples = 4 * quantidade
            return `Hambúrguer Simples (${quantidade}) = R$ ${hamburguerSimples.toFixed(2).replace('.', ',')}`
        case 300:
            let Cheeseburguer = 5.50 * quantidade
            return `Cheeseburguer (${quantidade}) = R$ ${Cheeseburguer.toFixed(2).replace('.', ',')}`
        case 400:
            let Bauru = 7.50 * quantidade
            return `Bauru (${quantidade}) = R$ ${Bauru.toFixed(2).replace('.', ',')}`
        case 500:
            let Refrigerante = 3.50 * quantidade
            return `Refrigerante (${quantidade}) = R$ ${Refrigerante.toFixed(2).replace('.', ',')}`
        case 600:
            let Suco = 2.80 * quantidade
            return `Suco (${quantidade}) = R$ ${Suco.toFixed(2).replace('.', ',')}`
        default:
            return 'Produto não existe'
    }
}

console.log(pedidos(100, 11))
console.log(pedidos(200, 4))
console.log(pedidos(300, 2))
console.log(pedidos(400, 1))
console.log(pedidos(500, 2))
console.log(pedidos(600, 1)) */

/*function plano (idade) {
    const valorPlano = 100.00
    const menor10 = 80.00
    const entre10e30 = 50.00
    const acima30ate60 = 95.00
    const acima60 = 130.00

        if (idade < 10) {
             return `Valor do plano de saúde: R$ ${valorPlano + menor10}`
        } else if (idade >= 10 && idade <= 30) {
             return `Valor do plano de saúde: R$ ${valorPlano + entre10e30}`
        } else if (idade > 30 && idade <= 60) {
             return `Valor do plano de saúde: R$ ${valorPlano + acima30ate60}`
        } else if (idade > 60) {
             return `Valor do plano de saúde: R$ ${valorPlano + acima60}`
        }
}

console.log(plano(22))
console.log(plano(9))
console.log(plano(76))
console.log(plano(46))*/

/*function mediaFinal (codAluno, nota1, nota2, nota3) {
    const notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    const media = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] *3))/10
    return `O aluno de código ${codAluno} com notas ${nota1}, ${nota2} e ${nota3} com a média final de ${media.toFixed(2)} foi ${media >= 5 ? 'Aprovado' : 'Reprovado'}`
}

console.log(mediaFinal(10, 5.6, 9.3, 7.5)) */

/*function onze () {
    let rep = 0
    while (rep < 11) {
        console.log('Hello World')
        rep++
    }
}

onze()

function cinquenta () {
    let num = 0
    while (num <= 50) {
        console.log(num)
        num++
    }
}
cinquenta()
*/

/*function mostrarPares () {
    let num = 0
    while (num <= 100) {
        if (num % 2 == 0) {
            console.log(num)
        }
        num++
    }
}
mostrarPares()

function mostrarPares1() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

mostrarPares1() */


/*function acharPares (vetor) {
    let qtdPares = 0
    let qtdImpares = 0
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
             qtdPares++
        } else { qtdImpares++ }
    }
    console.log(`Quantidade de números pares ${qtdPares} e impares ${qtdImpares}`)
}

acharPares([1,2,3,4,5,6,7,8])*/


/*function inteiros (vetor) {
    let intervalo = 0
    let foraIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
                intervalo++
        } else { foraIntervalo++ }
    }
    console.log(`${intervalo} dentro do intervalo e ${foraIntervalo} fora do intervalo`)
}

let vetor = [ 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23, 24, 25]
inteiros(vetor)
*/

/*let array = [13, 2, 3, 4, 5, 6, 10, 11, 12, 1, 15, 19, 20, 21, 22, 83, 24, 25]

function menorMaior (array) {
    let maior
    let menor
    const min = Math.min(...array)
    const max = Math.max(...array)
    for (let i = 0; i < array.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = array[i]
            menor = array[i]
        } else {maior = max, menor = min}
    }
    return [maior, menor]
}

console.log(menorMaior(array))*/

/*function negativos (array) {
    let qtdNegativos = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            qtdNegativos++
        }
    }
    return `Números negativos: ${qtdNegativos}`
}

array = [ 1, 0 , -1, -3, -5, -6, 20, 30, 40, 20]
console.log(negativos(array)) */

/*function media (array) {
    let soma = 0
        for (let i = 0; i < array.length; i++) {
            soma += array[i]
        }
    return soma/array.length
}

let array = [1,2,3]
console.log(media(array))*/

/*/let vetorInteiro = [1,2,3,4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [0.1, 0.2, 0.3, 0.4]

let todos = [...vetorInteiro, ...vetorString, ...vetorDouble]

console.log(todos) */


/*function string (string1, string2) {
    let resultado = true
        for (let i = 0; i < string1.length ; i++) {
            let caracterString1 = string1.charAt(i).toLowerCase()
            for (let j = 0; j < string2.length; j++) {
                let caracterString2 = string2.charAt(j).toLowerCase()
                if (caracterString1 == caracterString2) {
                    resultado = true

                } else { resultado = false}
            } if (!resultado) {
                return resultado
            }
        }
    return resultado
    }

console.log(string('abcd', 'abcd'))*/

/*let vetorPilha = [1,2,3,4,5]
let vetorAdicionar = [6,7,8,9,10]

function vetor (vetorInicial, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorAdiciona[i]
        vetorInicial.push(vetorAdiciona[i])
    }
    return vetorInicial
}

console.log(vetor(vetorPilha, vetorAdicionar))*/

/*function multiplicaVetor (vetor, multiplicador) {
    let vetorResultado = []
    vetor.forEach(function (elemento) {
        vetorResultado.push(elemento * multiplicador)
    })

    return vetorResultado
}
let array = [1,2,3,4,5,6]
console.log(multiplicaVetor(array, 2))*/

/*function final (notas) {
    let resultados = []
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 0 && notas[i] <= 4.9) {
            resultados.push('Conceito D')
        } else if (notas[i] >= 5.0 && notas[i] <= 6.9) {
            resultados.push('Conceito C')
        } else if (notas[i] >= 7.0 && notas[i] <= 8.9) {
            resultados.push('Conceito B')
        } else if (notas[i] >= 9.0 && notas[i] <= 10) {
            resultados.push('Conceito A')
        } else { resultados.push('Nota Inválida') }
    }
    return resultados
}

let notas = [15]

console.log(final(notas))*/

/*function pesquisa (operacao, ...quantidade) {
    if (operacao == 'media_salario_populacao') {
        total_salarios = 0
        let salarios = []
        for (let i = 0; i < quantidade.length; i++) {
            salarios.push(quantidade[i])
            total_salarios += quantidade[i]
        } let mediaSalarios = total_salarios / salarios.length
          return `Média salarial da população R$ ${mediaSalarios}`

    } else if (operacao == 'media_numero_filhos') {
        total_filhos = 0
        let filhos = []
        for (let i = 0; i < quantidade.length; i++) {
            filhos.push(quantidade[i])
            total_filhos += quantidade[i]
        } let mediaFilhos = total_filhos / filhos.length
          return `Média do número de filhos é ${mediaFilhos}`

    } else if (operacao == 'maior_salario') {
        salarios = []
        for (let i = 0; i < quantidade.length; i++) {
        salarios.push(quantidade[i])
        } let maiorSalario = Math.max(salarios)
        return `O maior salário é de R$ ${Math.max(...salarios)}`

    } else if (operacao == 'salario_inferior_ao_minimo') {
        populacao_total = []
        salarios = []
        for (let i = 0; i < quantidade.length; i++) {
            populacao_total.push(quantidade[i])
            if (quantidade[i] < 1100) {
                salarios.push(quantidade[i])
            } 
        }
    } qtd_populacao = populacao_total.length
      salario_inferior_minimo = salarios.length
      percentual = (salario_inferior_minimo * 100) / qtd_populacao
      return `Numa população total de ${qtd_populacao} pessoas, ${salario_inferior_minimo} recebem salário inferior ao salário mínimo que equivale à ${percentual.toFixed(2)}% da população total`
}

console.log(pesquisa('media_salario_populacao', 1200, 1500, 1800, 1900, 2000, 3000))

console.log(pesquisa('media_numero_filhos', 2, 3, 1, 2, 1, 0))

console.log(pesquisa('maior_salario', 1200, 1500, 1800, 1900, 2000, 3000, 98332, 93232323))

console.log(pesquisa('salario_inferior_ao_minimo', 1000, 2000, 2000))*/

let marcas = [{ marca: 'Ford', modelo:'Focus'},
              {marca: 'BMW', modelo: 'BMW Z4'}]

marcas.forEach(l => {
    console.log(l)
})