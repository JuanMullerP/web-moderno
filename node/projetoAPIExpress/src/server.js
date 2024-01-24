const port= 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos',(req,resp,next) =>{
    resp.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,resp,next)=>{
    resp.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,resp,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    resp.send(produto)
})

app.put('/produtos/:id',(req,resp,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    resp.send(produto)
})
app.delete('/produtos/:id',(req,resp,next)=>{
    const produto=bancoDeDados.excluirProduto(req.params.id)
    resp.send(produto)
})
app.listen(port, ()=>{
    console.log(`Servidor executando na porta ${port}.`)
})