
export default function TableRow(props) {
    return (
        props.list.map(user => {
            return (<tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={e=>props.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ms-2" onClick={e=>props.remove(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>)
        })
    )
}