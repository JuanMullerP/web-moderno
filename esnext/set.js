// não aceita repetição/não é indexada
const times = new Set()
times.add('Botafogo').add('Flamengo').add('Fluminense')
times.add('Vasco')
times.add('Palmeiras')
times.add('Bahia')
times.add('Bahia')

console.log(times)

//tbm possui função has e delete