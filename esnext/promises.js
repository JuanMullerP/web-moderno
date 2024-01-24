function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepoisDe(2,'Ola submundo')
    .then(frase=>frase.concat(' ^^ '))
    .then(result=>console.log(result))