const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// sincrono... que interrompe o eventloop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config=JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//para arquivos json podemos fazer a leitura da seuinte forma

const config=require('./arquivo.json')
console.log(config.db)

//lendo uma pasta(diretorio)

fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Arquivos do diretorio atual:')
    console.log(arquivos)
})