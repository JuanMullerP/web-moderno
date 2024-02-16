import './RenderForm.css'


export default function RenderForm(props){
    return(
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className='form-control' name='name' placeholder='Nome do Usuario'
                        value={props.name} onChange={props.updateField}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className='form-control' name='email' placeholder='Email do Usuario'
                        value={props.email} onChange={props.updateField}/>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={props.save}>
                        Salvar
                    </button>
                    <button className="btn btn-secondary ms-2"
                        onClick={props.clear}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}