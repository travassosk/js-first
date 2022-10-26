const sequencia = {
    _valor: 1, // convenção, é uma variavel é pretendida a acessar ela internamente dentro desse objeto
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this.valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor, sequencia.valor)