const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// axios � um client http
// ele faz requisi��es para obter informa��es de alguma informa��o remoto
const axios = require('axios')

//------------------------------------
//Desafio: Procurar a mulher chinesa 
//com menor sal�rio
//------------------------------------

// 1� passo
const chineses = f => f.pais === 'China'

// 2� passo
const mulheres = f => f.genero === 'F'

// 3� Passo
// primeiro par�metro � o acumulador
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