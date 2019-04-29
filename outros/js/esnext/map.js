const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

//Modo errado de ler
console.log(tecnologias.react)

//Modo certo de ler
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numeros']
])

chavesVariadas.forEach((ch, vl) => {
    console.log(ch, vl)
})

// o .has serve para procurar no array algum item
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// Não aceita repetição de chaves, apenas valores
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //sobrepõe o primeiro
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)