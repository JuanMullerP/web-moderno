const carrinho = [
    '{ "nome": "borracha", "preco":3.45}',
    '{ "nome": "Caderno", "preco":13.90}',
    '{ "nome": "Kit de Lapis", "preco":41.22}',
    '{ "nome": "Caneta", "preco":7.50}'
]
Array.prototype.map2=function(callback){
    let vet=[]
    for(let i=0;i<this.length;i++){
        vet.push(callback(this[i],i,this))
    }
    return vet
}

let resultado=carrinho.map2(e=>JSON.parse(e).preco)
console.log(resultado)