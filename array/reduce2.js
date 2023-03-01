const alunos=[
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Juan',nota:9.2,bolsista:true},
    {nome:'Maria',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]

const eBolsista= (acumulador,atual)=>(acumulador && atual)
const algumBolsista= (acumulador,atual)=>(acumulador || atual)
const resultado= alunos.map(e=>e.bolsista).reduce(eBolsista)
const resultado2= alunos.map(e=>e.bolsista).reduce(algumBolsista)
console.log(resultado, resultado2)