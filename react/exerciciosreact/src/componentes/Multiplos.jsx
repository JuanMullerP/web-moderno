
 const BoaTarde = props=><h1>Boa tarde {props.nome}</h1>

 const BoaNoite = props=><h1>Boa noite {props.nome}</h1>

export{BoaTarde,BoaNoite}

//não atrapalha o export default

// poderia tbm exportar da seguinte forma

//export default {BoaTarde,Boanoite}


// pra isso importariamos da seguinte forma

//import NomedoObjeto from './componentes/Multiplos'

//e acessariamos usando NomedoObjeto.BoaTarde