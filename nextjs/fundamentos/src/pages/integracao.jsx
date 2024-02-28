import {useState} from 'react'

export default function inte(){
    let [date,setDate]=useState({})
    function obterCliente(){
        fetch('http://localhost:3000/api/hello')
        .then(resp=>resp.json())
        .then(dados=>setDate(dados))
    }
    
    return (
        <div>
            <div>
                <button onClick={obterCliente}>Obter dados</button>
            </div>
            <ul>
                <li>Codigo: {date.id} </li>
                <li>Nome: {date.name} </li>
                <li>email: {date.email} </li>
            </ul>
        </div>
    )
}