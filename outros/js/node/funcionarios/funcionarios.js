const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// axios é um client http
// ele faz requisições para obter informações de alguma informação remoto
const axios = require('axios')

//------------------------------------
//Desafio: Procurar a mulher chinesa 
//com menor salário
//------------------------------------

// 1º passo
const chineses = f => f.pais === 'China'

// 2º passo
const mulheres = f => f.genero === 'F'

// 3º Passo
// primeiro parâmetro é o acumulador
// return = ? V : F
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

//------------------------------------

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log('------------------Menor salario------------------')
    console.log(func)
})