const express = require("express");
const fs =require('fs')
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true ,limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null,'src/imgs')
    },
    filename: function (req, file, callback) {
        console.log(file)
        callback(null,`${file.originalname}`)
    }
})
const upload = multer({storage}).single('upFile')

app.post('/upload',upload,(req, res, next)=>{
     res.send("enviou")
     res.end()
})


app.post('/docs/post/imagens.json',(req, res, next)=>{
    const imagens= require('./docs/imagens.json')
    imagens.push({...req.body})
    fs.writeFile('./docs/imagens.json',JSON.stringify(imagens),err=>err?console.log(err.message):console.log('salvo com sucesso'))
    res.send(imagens)
    res.end()
})
app.listen(9001, () => console.log('executando...'))