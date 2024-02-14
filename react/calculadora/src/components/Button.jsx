import './Button.css'


export default props =>
    <button className={props.className} onClick={e=>props.click && props.click(props.label)}>{props.label}</button>