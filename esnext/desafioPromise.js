const fs = require('fs')

const lerArquivo = caminho=>{

    return new Promise((resolve,reject)=>{
        fs.readFile(caminho+'/dados.txt','utf-8',(err,conteudo)=>{
            if(err){
                reject(err.message)
            }else{
                resolve(conteudo)
            }
        })
    })
}

lerArquivo(__dirname)
.then(console.log)
.catch(console.log)