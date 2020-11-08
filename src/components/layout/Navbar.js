import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">
                    <i className='fas fa-code' /> LXPER
                </Link>             
            </h1>
            <ul>
                <li>
                    <Link to="/main">문제목록</Link>
                </li>
                <li>
                    <Link to="/questionnaire">문제출제</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>              
            </ul>
        </nav>
        
    );
};

export default Navbar;