//tagged template - processa  o template dentro de uma função

function akilo(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'qualquer coisa'
}

const A='Eu'
const B='astronauta'

console.log(akilo `${A} virei ${B}`)