
interface InterClient{
     id?: Number
     nome: string
     idade:Number
     email: string
     pai: string
}

export default class Cliente{
     #id?: Number
     #nome: string
     #idade:Number
     #email: string
     #pai: string

    insereCliente(){
        return `'${this.#nome}',${this.#idade},'${this.#email}','${this.#pai}'`
    }

    constructor(cliente: InterClient){
        this.#id=cliente.id
        this.#nome=cliente.nome
        this.#idade=cliente.idade
        this.#email=cliente.email
        this.#pai=cliente.pai
        
    }
    
    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

    get email(){
        return this.#email
    }

    get pai(){
        return this.#pai
    }
}