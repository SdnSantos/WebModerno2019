const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
console.log('-------------------------------------------------')

//remove o último elemento do array
pilotos.pop()
console.log(pilotos)
console.log('-------------------------------------------------')

//adiciona um elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)
console.log('-------------------------------------------------')

//remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)
console.log('-------------------------------------------------')

//adiciona um elemento a primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)
console.log('-------------------------------------------------')

//splice() adiciona e remove elementos
pilotos.splice(1, 1)
console.log(pilotos)
console.log('-------------------------------------------------')

pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)
console.log('-------------------------------------------------')

//pegar uma parte de outro array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
console.log('-------------------------------------------------')

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
console.log('-------------------------------------------------')