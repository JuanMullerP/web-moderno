import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from 'react-router-dom'

import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Router from './Routes'

export default function App(props) {
    return (<div className="app">
        <BrowserRouter>
            <Logo />
            <Nav />
            <Router />
            <Footer />
        </BrowserRouter>
    </div>)
}
