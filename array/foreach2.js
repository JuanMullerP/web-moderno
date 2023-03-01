const aprovados = ['june','bia','lala','jorge']


Array.prototype.forEach2= function(fucao){for(let i=0;i<this.length;i++){
    fucao(this[i],i,this)
}}

aprovados.forEach2(function (nome,indice){
    console.log(`${indice +1}) ${nome}`)
})
