import Cliente from "@/core/Cliente"

interface TableProps {
    clientes: Cliente[]
}

'ala'

export default function Tabela(props: TableProps) {
    

        function renderizarClientes(){
            let linhas = props.clientes.map(
                (cliente) => {
                    return (<tr key={`${cliente.id}`}>
                        <td>{`${cliente.id}`}</td>
                        <td>{`${cliente.nome}`}</td>
                        <td>{`${cliente.idade}`}</td>
                        <td>{`${cliente.email}`}</td>
                        <td>{`${cliente.pai}`}</td>
                    </tr>)
                })
            return linhas

        }

        function renderizarCabecalho(){
            return (<tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Pai</th>
            </tr>  )
        }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            bg-gradient-to-r from-yellow-700 to-green-800
            
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarClientes()}
            </tbody>

        </table>
    )
}