import React, {Fragment, useState, useCallback, useEffect} from 'react';
// import { lxperApi } from '../../api'
import axios from 'axios'
import Loader from '../Loader'
import {Link} from 'react-router-dom'

const token = "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA0OTM4MzE0fQ.X4q-21YOX7pnKfgk7wv3K1fJ-nKcO_Lh_j0GmRgV5bmxoZDWTfeT4pinWS2nu5I7BQajCynv_cNdCYsbUfSM5zFZxY5Tve0f77rCok2kCDgdHifcSY4iLUprWFcxIww-ijrRV4Ofz580TfXFKvCtW-NftviVUWBI8EOPQG1s3avwZxn3c_G8HvynETPgUrpB1hw6O2JPsxbfIzO_MH3Fty3zn7LNEGl3pSbQSi3y5PHKOboAGckqQrNqgaSZtUUiTFnErlZR8-IZbWAAJ-FH19SQLr9Y_TZFYi0YqP3Qi9kbc3PuWsgXLaOd948VzHcuSUANEfltVFJDomD-14pwUg"

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
                                <Link to=""><bottom class="btn btn-secondary btn-success">문제수정</bottom></Link> 
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