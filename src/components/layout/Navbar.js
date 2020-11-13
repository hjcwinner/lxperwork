import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const [log, setLog] = useState(false)

    const token = localStorage.getItem('token')

    const authLink = (
        <ul>
            <Link to="/"><botton type="button" onClick ={ () => {
                localStorage.clear('token')
                setLog(true)
                }} >LOGOUT</botton></Link>
        </ul>
    )

    const guestLinks = (
        null
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