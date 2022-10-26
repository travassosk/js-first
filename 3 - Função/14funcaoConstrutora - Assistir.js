function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 //atributo privado
    this.acelerar = function () {     //metodo publico
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual =  function () { //metodo publico
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


function escola(nota) {
    this.matematica = function() {
        if (nota <= 7) {
            return'Reprovado'
        } else {
            return'Aprovado'
        }
    }
}

const notaFinal = new escola(3.5)

console.log(notaFinal.matematica())

