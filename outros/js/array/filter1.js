const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copode Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log('----------------------------------------------------')
console.log('Solução da Aula:')
console.log(produtos.filter(caro).filter(fragil))
console.log('----------------------------------------------------')

console.log('Minha solução:')
console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil
}))
console.log('----------------------------------------------------')