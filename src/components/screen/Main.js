import React, {Fragment, useState, useEffect} from 'react';
import { lxperApi } from '../../api'
import axios from 'axios'

const Main = (props) => {

    const [lxpget, setLxpget] = useState([])

    const getData = async () => {
        const [data, dataError] = await lxperApi.getscreen()
        console.log(data)

        setLxpget(data)
    }

    useEffect(() => {
        getData()
    }, [])

    // axios.get("https://interview.lxper.ai/api/questions", {
    //     headers: {
    //         Auth : "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA0ODc4MDI4fQ.j96jIuSQLMVdGuhLRCjsckZCKnM2XcYx2vMdqYB0xIsNVjY8zgC-ss4TglbW954-qeayLdog1AacdD5aYGZgRNgzJlMeWmot97xnP8AD5rOLA5dbbf0OKQvolz_GLatzr1wzBgs2GvLTFCjxpdk_9QPtGZj1S16lhP-b8IHQhIhWWp5Mw7SIMDWpejn4VEZbuYB-lVwbGv7pf22hhvYw_cBmdO7W1Bo7wTHKKTp1i5T_WHlH54ZgClJrCXKNQGTUM7IujPXgGinOdPO6t5RdHrH06jdYKnfJ2wqGRwjDrKeYQJ686--c64s9omNXBl3aD8Q_Wp60BoYsNlyOFs5dWQ"
    //     }
    // })
    // .then(res => {console.log(res)})


    return (
        <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 m-auto'>
                    <h1 className='large text-primary text-center'>
                        문제출제
                    </h1>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default Main;