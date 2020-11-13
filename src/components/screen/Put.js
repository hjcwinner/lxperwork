import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Loader from '../Loader'
import { useHistory } from 'react-router-dom'

const token = "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA1MTg4MTA1fQ.EI-U984M5IfxrbriJzfsnhVfIqzCrsuee7pOVlAvZlSCRi8fEPn8d-L1cdn4p3jslvbGnWZoWoBgjLg3TgH0DgZ5JBuzom_JgwDBx_TZ1lBZ51wcvClVW0V6cqCqXud6rzDAcUexehpP4kHHuMsqWo-UaaXwd3-9HUjClmzhRllzbhWzQnIUdMaCjKNvapQKQxAulQwp829Mq22E0B0XgCXeW3-xUW55N26bqo6aRpnz2NEln1fH6gNz1ZNJcdg-hGNYSodhIbtqrLtMbnrf_jjbsBQPutwQla4Q0UPSjK_cqM9WBNOg2mi2zyDiGTl9X-RFnb8HD7LmlY3jhJSXrw"

    const apiUrl = 'https://interview.lxper.ai'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Auth: `JWT ${token}`
        }
    })


const Questionnaire = ({ match }) => { 

    useEffect(() => {
        getData()
    }, [])

    const [data, setData] = useState({
        id: "",
        number: 0,
        direction: "",
        content: "",
        choices: [],
        answer: 0
    })

    const [loading, setLoading] = useState(true)

    const getData = async () => {            
        const getData = await authAxios.get(`/api/questions/${match.params.id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
        }

    const [best, setBest] = useState("") 

    const { number, direction, content, answer} = data

    const onChange = e => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const onChangebest = e => {
        setBest(e.target.value)
    }

    const choiadd = () => {
        var arrayCopy = data
        arrayCopy.choices.unshift(best)
        arrayCopy.number = Number(arrayCopy.number)
        arrayCopy.answer = Number(arrayCopy.answer)
        setData(arrayCopy)
    }

    const additem = () => {
        const array = {...data}
        array.choices.push(best)
        setData(array)
    }

    const deletelist = (i) => {
        const array = {...data}
        array.choices.splice(i,1)
        setData(array)
    }

    const history =  useHistory()

    const onSubmit = e => {
        e.preventDefault()
        console.log("++++++++++++++++++++++++++++++++++++++++++", data.id)
        putdata()
    }

    const putdata = async() => {
        await authAxios.post(`/api/questions/${data.id}`, data)
             .then(res => {
                 console.log(res)
                 if(res.data !=null) {
                     alert("문제가 수정 되었습니다.")
                     history.push("/main")
                 }
             })
             .catch(err => {
                 console.log(err)
             })
         }

    const reset = () => {
        setData({
            id: "",
            number: 0,
            direction: "",
            content: "",
            choices: [],
            answer: 0
        })
        setBest("")
    }

    return (
        loading
        ? <Loader />
        :
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='large text-primary text-center'>
                            문제수정하기 
                        </h1>
                        <form onSubmit={e => onSubmit(e)}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">질문번호</label>
                                <div class="row">
                                    <div class="col-sm">
                                        <input type="number" 
                                        class="form-control" 
                                        placeholder="질문을 입력하세요"
                                        // required
                                        name='number'
                                        value={number}
                                        onChange={e => onChange(e)}
                                        />
                                    </div>
                                </div> 
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">지시문</label>
                                <div class="row">
                                    <div class="col-sm">
                                        <textarea type="text" 
                                        class="form-control" 
                                        placeholder="지시문을 입력하세요"
                                        // required
                                        name='direction'
                                        value={direction}
                                        onChange={e => onChange(e)}>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">글</label>
                                <div class="row">
                                    <div class="col-sm">
                                        <textarea type="text" 
                                        class="form-control" 
                                        placeholder="글 입력하세요"
                                        // required
                                        name='content'
                                        value={content}
                                        onChange={e => onChange(e)}
                                        rows="5"
                                        >   
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">정답</label>
                                <div class="row">
                                    <div class="col-sm">
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="정답을 입력하세요"
                                        // required
                                        name='best'
                                        value={best}
                                        onChange={e => onChangebest(e)}
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <button onClick={ () => { 
                                            additem() 
                                        }} class="btn btn-primary btn-lg" type="button">+</button>
                                    </div>       
                                </div>
                            </div>
                             <div>
                                <ul>   
                                    {data.choices.map((item, i) => (
                                        <li>      
                                            <input key={i} type="radio" name="answer" value={i} onChange={e => onChange(e)}/> {i+1}. {item}&nbsp;&nbsp;&nbsp;
                                            <button onClick={() => {deletelist(i)}}> ❌</button>
                                        </li>
                                ))}
                                </ul>
                            </div>
                            <p>*등록하신 답지 중 옳은 답 하나를 반드시 선택하고 제출하셔야 합니다.</p>
                            <button type="submit" onClick={ () => {choiadd()}} class="btn btn-primary btn-lg">SUBMIT</button>
                            <button type="button" onClick={ () => {reset()} } class="btn btn-secondary btn-lg">REST</button>
                            <button type="button" onClick={ () => {history.push("/main")}} class="btn btn-secondary btn-lg">CANCEL</button>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Questionnaire.propTypes = {
    id : PropTypes.string,
    number : PropTypes.number,
    direction : PropTypes.string,
    content : PropTypes.string,
    choices : PropTypes.array,
    answer : PropTypes.number,
}

export default Questionnaire;