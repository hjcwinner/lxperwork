import React, { Fragment } from 'react';
// import { lxperApi } from '../../api'
import axios from 'axios'

const Main = (props) => {

    // const [lxpget, setLxpget] = useState([])

    // const getData = async () => {
    //     const [data, dataError] = await lxperApi.getscreen()
    //     console.log(data)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    // axios.get("https://interview.lxper.ai/api/questions", {
    //     headers: {
    //         Auth : "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA0ODc4MDI4fQ.j96jIuSQLMVdGuhLRCjsckZCKnM2XcYx2vMdqYB0xIsNVjY8zgC-ss4TglbW954-qeayLdog1AacdD5aYGZgRNgzJlMeWmot97xnP8AD5rOLA5dbbf0OKQvolz_GLatzr1wzBgs2GvLTFCjxpdk_9QPtGZj1S16lhP-b8IHQhIhWWp5Mw7SIMDWpejn4VEZbuYB-lVwbGv7pf22hhvYw_cBmdO7W1Bo7wTHKKTp1i5T_WHlH54ZgClJrCXKNQGTUM7IujPXgGinOdPO6t5RdHrH06jdYKnfJ2wqGRwjDrKeYQJ686--c64s9omNXBl3aD8Q_Wp60BoYsNlyOFs5dWQ"
    //     }
    // })
    // .then(res => {console.log(res)})

    axios.get("https://interview.lxper.ai/api/questions", {
            headers: {
                Auth: "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA0OTI3MzIyfQ.ho7aVR-TD-SOlIdO_xyZsK6HlmRAvwB3zDGF7V9pR9IhHhYNwK0EdDOZpIO9NV9h0NDrgWW13-PLe0ET3d1VZU3Pks7z2lThh0uinY4bbRQ6fHwKbwH_6yExrs5JIfORCiBDyQArmaoAAU0anNb__NCT0sdH5UNj7qpLOgK41xtYFSNyN9BzrDFI7hKxb_-Z6Lwhd7sAlJDvnPWCk5Q1odTFemkqR4mlquDDi2dg2IN8c-iiXYctMTKl8ZjZKFCIykxBeTXfz5SLDq1w9VK4Drzd2HUiLDiiBxJ2Hl0GDLkLRrIAApYT89iGqyFAlIx_B_vBtjLhcztDS20BHFjOXQ"
            }
        })
        .then(res => {console.log(res)})

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