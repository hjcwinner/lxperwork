import React, {Fragment, useState, useEffect} from 'react';
// import { lxperApi } from '../../api'
import axios from 'axios'
import Loader from '../Loader'
import {Link} from 'react-router-dom'

const Main = () => {

    const token = localStorage.getItem('token')

    const apiUrl = 'https://interview.lxper.ai'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Auth: `JWT ${token}`
        }
    })

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [requestError, setRequestError] = useState()
    
   const fetchData = async () => {
       try {
          const result = await authAxios.get(`/api/questions`)
              setUsers([...result.data])
              setLoading(false)
       }
       catch(err){
           setRequestError(err.message)
       }
   }

   useEffect(() => {
    fetchData()
   }, [])


    return (
        loading
        ? <Loader />
        :
        <Fragment>
        <Link to="/questionnaire"><button type="button" style={{position : "fixed", right : 15, bottom : 15, zIndex : 1, fontSize : 45, backgroundColor : "blue"}}>➕</button></Link>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 m-auto'>
                    <h1 className='large text-primary text-center'>
                        문제목록
                    </h1>
                        {users.map((user) => (                 
                        <div class="row" style={{paddingBottom : 25}}>
                            <div class="card" style={{borderColor : "#48D1CC", borderWidth : 5}}>
                                <div class="card-body" >
                                    <h5 class="card-title">{user.number} . {user.direction}</h5>
                                    <p class="card-text">{user.content}</p>
                                    {user.choices.map((choice, i) => (
                                    <div key={i}>
                                        <p key={i}>{i+1}. {choice}</p>
                                    </div>
                                    ))}  
                                </div>
                                <div style={{textAlign : "right"}}>   
                                <Link to={`/edit/${user.id}`}><botton type="button" class="btn btn-primary">✏️</botton></Link> 
                                </div>
                            </div>
                        </div>
                        ))}  
                 </div>
            </div>
        </div>
    </Fragment>
    
    );
};

export default Main;