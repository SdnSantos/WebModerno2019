require('./global')

console.log(minhaApp.saudacao())

//Não será possível
//pois no outro programa foi congelado o objeto
//Object.freeze()
minhaApp.nome = 'Eita!'

console.log(minhaApp.nome)