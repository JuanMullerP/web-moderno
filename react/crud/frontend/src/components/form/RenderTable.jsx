import TableRow from "./TableRow"
export default function RenderTable(props){
    return(
        <>
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <TableRow list={props.list} load={props.load} remove={props.remove} />
            </tbody>
        </table>
        </>
    )
}