let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { 
    return 2 * a
}

dobro = a => 2 * a // tirar o () para um parametro, a partir de 2 é obrigado, Se colocar o {} o return tem que ser colocado na função
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // nao tem parametro
ola = _ => 'Olá' // possui um parametro mas pode ignorar o parametro, javascript nao obriga a passar parametros
console.log(ola())