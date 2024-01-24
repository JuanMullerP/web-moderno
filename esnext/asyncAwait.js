const http = require('http')


const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`


    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// recurso do ES8
// Objetivo facilitar o uso de promises

let obterAlunos= async ()=>{
    let turmaA = await getTurma('A')
        turmaA=turmaA.map(elem=>'A :'.concat(elem.nome))
    let turmaB = await getTurma('B')
        turmaB=turmaB.map(elem=>'B :'.concat(elem.nome))
    let turmaC = await getTurma('C')
        turmaC=turmaC.map(elem=>'C :'.concat(elem.nome))
    return [].concat(turmaA,turmaB,turmaC)
}// na verdade vai retornar um objeto AsyncFunction e ae sim usamos o then

obterAlunos()
    .then(alunos=>alunos.map(elem=>console.log(elem)))