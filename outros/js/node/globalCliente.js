require('./global')

console.log(minhaApp.saudacao())

//N�o ser� poss�vel
//pois no outro programa foi congelado o objeto
//Object.freeze()
minhaApp.nome = 'Eita!'

console.log(minhaApp.nome)