import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // const token = localStorage.getItem('token')

    const [token, setToken] = useState(localStorage.getItem('token'))

    const authLink = (
        <ul>
            <Link to="/"><botton type="button" onClick ={ () => {
                setToken(localStorage.clear('token'))
                }} >LOGOUT</botton></Link>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/main">
                    <i className='fas fa-code' /> LXPER
                </Link>             
            </h1>
            <ul>
                {token 
                ? authLink
                : null
                }     
            </ul>
        </nav>
        
    );
};

export default Navbar;