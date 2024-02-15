import './App.css'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'

export default function App(props) {
    return (<div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>)
}
