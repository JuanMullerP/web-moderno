const produtos = [
    { nome:'Notebook', preco: 2499, fragil:true},
    { nome:'iPad Pro', preco: 4199, fragil:true},
    { nome:'Copo de  Vidro', preco: 12.49, fragil:true},
    { nome:'Copo de Plastico', preco: 18.99, fragil:false}
]
Array.prototype.filter2=function(callback){
        let vet=[]
        for(let i=0;i<this.length;i++){
            if(callback(this[i],i,this))
            vet.push(this[i]);
        }
        return vet
}
console.log(produtos.filter2(function(p){
    return (p.fragil && p.preco>500)
}))