import './NavItem.css'
import { Link } from 'react-router-dom'

export default function NavItem(props){
    return (
        <Link to={props.path} className='nav-item'>
            <i className={`fa fa-${props.icon}`}></i>{props.label}
        </Link>
    )
}