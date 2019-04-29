const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//function
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//Arow Function
aprovados.forEach(nome => console.log(nome))
console.log('-------------------------------------------------')

//constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
console.log('-------------------------------------------------')