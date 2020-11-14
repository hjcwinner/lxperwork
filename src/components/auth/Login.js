import React, { Fragment, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Nav from '../layout/Navbar'

const Login = (props) => {

    const [data, setData] = useState("")

    const history = useHistory()

    const handleHistory = () => {
        history.push("/main")
    }

    const onChange = e => {
        setData(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        axios
            .post(`https://interview.lxper.ai/auth/${data}`)
            .then(res => {
                localStorage.setItem('token', res.data.jwt)
                handleHistory()
            })
            .catch(err => {
                console.log(err)
                setData("")
                alert("없는 아이디거나 아이디가 일치하지 않습니다")
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
                            <input type='submit' className='btn btn-primary' value='Login' size="lg" />
                        </form>
                    </div>
                </div>
            </div>
            <Nav />
        </Fragment>
    );
};

export default Login;