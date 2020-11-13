import React from 'react';
import { Link } from 'react-router-dom'

const Landing = (props) => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>LXPER 문제은행</h1>
                    <p className='lead'>
                        LXPER 문제은행 하드코딩
                    </p>
                    <div>
                        <Link to='/login' className='btn btn-light'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;