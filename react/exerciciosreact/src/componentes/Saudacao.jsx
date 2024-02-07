
import { Component } from "react";

export default class Saudacao extends Component {
    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }
    constructor(props){
        super(props)
        this.setTipo=this.setTipo.bind(this)
    }
    setTipo(evento){
        this.setState({tipo:evento.target.value})
    }
    setNome(evento){
        this.setState({nome:evento.target.value})
    }
    render(){
        const {tipo,nome}= this.state
        return (
            <>
            <h1>{tipo} {nome}</h1>
            <hr />
            <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
            <input type="text" placeholder="Nome..." value={nome} onChange={e=>this.setNome(e)} />
            </>
        )
    }
}