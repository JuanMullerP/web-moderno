import { StrictMode } from 'react'
import Primeiro from './componentes/Primeiro'
import Bomdia from './componentes/Bomdia'
import './scss/estilo.scss'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import { createRoot } from 'react-dom/client';
import Pai from './componentes/Pai'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <>
        <StrictMode>
            <Pai nome="Carlos" sobrenome="Duarte"/>
            <Saudacao tipo="Bom dia" nome="Kleyton" />
            <Bomdia nome="kraiston" />
            <BoaTarde nome="Josef" />
            <BoaNoite nome="Anna" />
            <Primeiro />
        </StrictMode>
    </>

)


