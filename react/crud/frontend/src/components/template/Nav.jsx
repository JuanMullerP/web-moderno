import './Nav.css'
import NavItem from './NavItem'


export default function Nav(props) {
    return (<aside className="menu-area">
        <nav className="menu">
            <NavItem path="/" icon="home" label="Inicio" />
            <NavItem path="/users" icon="users" label="Usuários" />
        </nav>
    </aside>)
}