import React, { Fragment, useState } from 'react';
import axios from 'axios'


const Login = (props) => {

    const [data, setData] = useState("")

    const onChange = e => {
        setData(e.target.value)
       console.log(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(data)
        axios
            .post(`https://interview.lxper.ai/auth/${data}`)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.token)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='large text-primary text-center'>
                            Login
                        </h1>
                        <p className='lead text-center'>
                            <i className='fas fa-user' /> Login now
                        </p>
                        <form className='form' onSubmit={e => onSubmit(e)}>
                            <div className='form-group'>
                                <input 
                                    type="text"
                                    required
                                    value={data}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <input type='submit' className='btn btn-primary' value='Login' size="lg"/>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;