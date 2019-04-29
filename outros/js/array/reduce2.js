const alunos = [
    { nome: 'Jo�o', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos s�o bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log('--------------------------------------------')
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno � bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log('--------------------------------------------')
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

console.log('--------------------------------------------')