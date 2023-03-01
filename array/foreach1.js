const aprovados = ['june','bia','lala','jorge']

aprovados.forEach(function (nome,indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
//a função call back passada no for each sempre recebe nome, indice, e o propio array
const exibirAprovados= aprovado=> console.log(aprovado)
aprovados.forEach(exibirAprovados)