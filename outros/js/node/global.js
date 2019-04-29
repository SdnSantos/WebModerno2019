console.log(global)

//Object.freeze() - Imutável
global.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})