import Main from "../template/Main";

export default function Home(props){
    return(
        <Main icon="home" title="Inicio"
        subtitle="Segundo projeto do captulo React." >
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">sistema de cadastro em React!</p>
        </Main>
    )
}