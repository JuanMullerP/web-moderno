const tecnologias =new Map()
tecnologias.set('react',{ biblioteca:true})
tecnologias.set('Angular',{ biblioteca:false})

console.log(tecnologias.get('react'))

const outroJeito = new Map([
    [()=>{},'Arrow Function'],
    [{},'Objeto'],
    [12345,'Numero']
])
//atento que para usar uma função como chave primeiro seria necessario armazenala numa variavel e passar então essa variavel como chave
//afim de posteriormente acessar ela como chave
outroJeito.forEach((valor,chave)=>{
    console.log(chave,valor)
})
console.log(outroJeito.get(12345))