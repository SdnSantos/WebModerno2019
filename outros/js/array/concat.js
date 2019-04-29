const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Ueslei']

// concat() uni arrays e é possível adicionar mais parâmetros
// gera um novo array, não alterando o principal
const todos = filhas.concat(filhos, 'Fulano')

console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [
    [6, 7]
]))