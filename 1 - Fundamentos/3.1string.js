const escola = 'cod3r'
console.log(escola.charAt(4)) // quer dizer que eh a 4 letra de Cod3r
console.log(escola.charCodeAt(3)) // no unicode o numero 3 eh 51
console.log(escola.indexOf(`3`)) // existe o valor 3 dentro de cod3r?

console.log(escola.substring(1)) //incluindo o 1 ate o final (od3r)
console.log(escola.substring(0, 3)) // incluindo do indice 0 pra frente menos o 3

console.log(`escola ` + escola + '!')
console.log('escola '.concat(escola).concat(`!`))
console.log(`escola ${escola}!`)

console.log(escola.replace(3, `e`)) // Mudou a letra
console.log('Ana,Maria,Pedro'.split(','))
