console.log(this === global)
console.log(this === module)
console.log(this === exports)
console.log(this === module.exports)

function logThis() {
    console.log('Dentro de uma fun��o...')
    console.log(this === exports)
}