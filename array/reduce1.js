const alunos=[
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Juan',nota:9.2,bolsista:true},
    {nome:'Maria',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]

console.log(alunos.map(e=>e.nota))
const resultado= alunos.map(e=>e.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador+atual
},0)
console.log(resultado)