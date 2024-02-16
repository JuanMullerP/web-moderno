import { Component } from "react"
import Main from '../template/Main'
import axios from 'axios'
import RenderForm from "../form/RenderForm"
import RenderTable from "../form/RenderTable"

const dbUrl= 'http://localhost:3001/users'
const initialState={
    user:{name:'',    email:''},
    list: []
}

export default class UserCrud extends Component {

    state={...initialState}

    componentDidMount(){
    axios(dbUrl).then(resp =>{
        this.setState({list: resp.data})
    })

    }
    clear(){
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id? 'put':'post'
        const url = user.id? `${dbUrl}/${user.id}`:dbUrl
        axios[method](url,user)
        .then(resp=>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user, list})
        })
    }

    getUpdatedList(user){
        const list=this.state.list.filter(u=> u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        console.log(user)
        this.setState({user})
    }
    load(user){
        this.setState({user})
    }
    remove(user){
        axios.delete(`${dbUrl}/${user.id}`).then(resp=>{
            const list = this.state.list.filter(us=>us!==user)
            this.setState({list})
        })
    }
    render() {
        return (
            <Main icon="users" title="Cadastro de Usuario" subtitle="Cadastro de usuarios:Incluir, Listar, Alterar e Excluir!">
                <RenderForm name={this.state.user.name} email={this.state.user.email}
                 updateField={this.updateField.bind(this)}
                 save={this.save.bind(this)}
                 clear={this.clear.bind(this)} />
                <RenderTable list={this.state.list} load={this.load.bind(this)} remove={this.remove.bind(this)} />
            </Main>
        )
    }

}