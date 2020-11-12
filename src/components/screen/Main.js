import React, {Fragment, useState, useCallback, useEffect} from 'react';
// import { lxperApi } from '../../api'
import axios from 'axios'
import Loader from '../Loader'
import {Link} from 'react-router-dom'
import Put from './Put'

const token = "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA1MTg4MTA1fQ.EI-U984M5IfxrbriJzfsnhVfIqzCrsuee7pOVlAvZlSCRi8fEPn8d-L1cdn4p3jslvbGnWZoWoBgjLg3TgH0DgZ5JBuzom_JgwDBx_TZ1lBZ51wcvClVW0V6cqCqXud6rzDAcUexehpP4kHHuMsqWo-UaaXwd3-9HUjClmzhRllzbhWzQnIUdMaCjKNvapQKQxAulQwp829Mq22E0B0XgCXeW3-xUW55N26bqo6aRpnz2NEln1fH6gNz1ZNJcdg-hGNYSodhIbtqrLtMbnrf_jjbsBQPutwQla4Q0UPSjK_cqM9WBNOg2mi2zyDiGTl9X-RFnb8HD7LmlY3jhJSXrw"

    const apiUrl = 'https://interview.lxper.ai'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Auth: `JWT ${token}`
        }
    })

const Main = (props) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [requestError, setRequestError] = useState()
    
   const fetchData = useCallback(async () => {
       try {
          const result = await authAxios.get(`/api/questions`)
             console.log("콘솔확인용",result.data)
              setUsers([...result.data])
              setLoading(false)
       }
       catch(err){
           setRequestError(err.message)
       }
   })
   
   const deletedata = async(id) => {
       authAxios.delete(`/api/questions/${id}`)
            .then(res => {
                console.log(res)
                if(res.data !=null) {
                    alert("문제가 삭제 되었습니다.")
                }
                setUsers(users.filter(user => user.id !== id))
            })
            .catch(err => {
                console.log(err)
            })
   }

   useEffect(() => {
    fetchData()
   }, [])


    return (
        loading
        ? <Loader />
        :
        <Fragment>
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
                                    <div>
                                        <p key={i}>{i+1}. {choice}</p>
                                    </div>
                                    ))}  
                                </div>
                                <div style={{textAlign : "right"}}>
                                <Link to=""><bottom class="btn btn-secondary btn-primary">문제풀기</bottom></Link>   
                                <Link to={`/edit/${user.id}`}><bottom class="btn btn-secondary btn-success">문제수정</bottom></Link> 
                                <bottom class="btn btn-secondary btn-danger" onClick={ () => {deletedata(user.id)}}>문제삭제</bottom>
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