const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


console.log(ferrari.__proto__) // a partir desse comando __proto__ eu consigo acessar o prototipo desse objeto, o pai dele 
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)