let comparaComThis = function (param) {    // o this dentro do escopo de uma função pq vai ta mexendo no escopo global
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora está apontando o this para obj
comparaComThis(global)
comparaComThis(obj)

let comparaComArrow = param => console.log(this === param)
comparaComArrow(global)
comparaComArrow(module.exports)
comparaComArrow(this)

comparaComArrow = comparaComArrow.bind(obj)
comparaComArrow(obj)
comparaComArrow(this)
comparaComArrow(module.exports)
// this de uma função arrow é um this associado ao contexto no qual a função foi escrita, não tem variação mesmo com o bind