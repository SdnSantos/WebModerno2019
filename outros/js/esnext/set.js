// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('curintia')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //case-sensitive
console.log(times.has('Vasco'))
times.delete('curintia')
console.log(times.has('curintia'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)