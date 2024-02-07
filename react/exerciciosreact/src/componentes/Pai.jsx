import Filho from "./Filho";

export default props =><>
<h1>{props.nome} {props.sobrenome}</h1>
<h2>Filhos</h2>
<ul>
    <Filho nome="Jirleu" sobrenome={props.sobrenome}/>
    <Filho {...props}/>
    <Filho {...props} nome="Mendonça" />
</ul>
</>