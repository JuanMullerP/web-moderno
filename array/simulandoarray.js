const quasearray= {0: 'luna', 1:'ana',2:'julia'}

console.log(quasearray)
Object.defineProperty(quasearray, 'toString',{
    value: function(){return Object.values(this)}, enumerable: false //enumerable pra n devolver a função como um dos conteudos do objeto
})

console.log(quasearray.toString())