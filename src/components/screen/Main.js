import React, {Fragment, useState, useCallback, useEffect} from 'react';
// import { lxperApi } from '../../api'
import axios from 'axios'

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
    const [requestError, setRequestError] = useState()
    
   const fetchData = useCallback(async () => {
       try {
          const result = await authAxios.get(`/api/questions`)
             console.log("콘솔확인용",result.data)
              setUsers([...result.data])
              console.log(users)
       }
       catch(err){
           setRequestError(err.message)
       }
   })     

   useEffect(() => {
    fetchData()
   }, [])


    return (
        <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 m-auto'>
                    <h1 className='large text-primary text-center'>
                        문제출제
                    </h1>
                        {users.map((user) => (                 
                        <div class="row">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{user.number} . {user.direction}</h5>
                                    <p class="card-text">{user.content}</p>
                                    {user.choices.map((choice) => (
                                    <div>
                                        <p>{choice}</p>
                                    </div>
                                    ))}  
                                </div>
                            </div>
                            <br />
                        </div>
                        ))}   
                 </div>
            </div>
        </div>
    </Fragment>
    );
};

export default Main;