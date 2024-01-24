for (let letra of 'nunuMamadeira'){
    console.log(letra)
}

const assuntos = ['cinema','musica','lugares']

for(let indice in assuntos){
    //no for in a gnt recebe cada um dos indices
    console.log(indice,assuntos[indice])
}

for(let assunto of assuntos){
    //no for of a gnt recebe cada um dos valores de cada elemento
    console.log(assunto)
}
const assuntoMap = new Map([
    ['cinema',{ aconteceu:true }],
    ['musica',{ aconteceu:false }],
    ['lugares',{ aconteceu:true }]
])

for(let [assunto,conclusao] of assuntoMap){
    console.log(assunto,conclusao)
}