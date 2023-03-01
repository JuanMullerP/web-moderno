console.log(typeof Array, typeof new Array,typeof [])
const pilotos =['lust','done','labda']
console.log(pilotos)
console.log(pilotos.pop())
console.log(pilotos)

//metodos simples
pilotos.pop() //remove o ultimo elemento

pilotos.push()//adiciona o elemento na ultima posição

pilotos.shift()//remove o primeiro elemento

pilotos.unshift()//adiciona o elemento na primeira posição

//splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2,0,'seila','numsei')
console.log(pilotos)

//remover apenas um elemento apartir do indice 3
pilotos.splice(3,1)
console.log(pilotos)


const ovet= pilotos.slice(2)// devolve um novo array com os elementos apartir do indice colocado
const ovet2= pilotos.slice(2,4)// devolve um novo array com os elementos apartir do indice colocado e vai ate n-1 do segundo parametro