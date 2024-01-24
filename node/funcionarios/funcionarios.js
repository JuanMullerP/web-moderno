const url="http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios =require('axios')

const isChinese = func=>func.pais==='China'
const isWoman = func=>func.genero==='F'
const minorSalary= (minor,current)=> {
    return minor.salario < current.salario ? minor:current
}

axios.get(url).then(response =>{
    const funcionarios=response.data
    let resposta=funcionarios
        .filter(isChinese)
        .filter(isWoman)
        .reduce(minorSalary)

    console.log(resposta)

})