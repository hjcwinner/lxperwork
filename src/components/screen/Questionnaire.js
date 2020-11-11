import axios from 'axios';
import React, { Fragment, useState, useCallback } from 'react';

const token = "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA0OTM4MzE0fQ.X4q-21YOX7pnKfgk7wv3K1fJ-nKcO_Lh_j0GmRgV5bmxoZDWTfeT4pinWS2nu5I7BQajCynv_cNdCYsbUfSM5zFZxY5Tve0f77rCok2kCDgdHifcSY4iLUprWFcxIww-ijrRV4Ofz580TfXFKvCtW-NftviVUWBI8EOPQG1s3avwZxn3c_G8HvynETPgUrpB1hw6O2JPsxbfIzO_MH3Fty3zn7LNEGl3pSbQSi3y5PHKOboAGckqQrNqgaSZtUUiTFnErlZR8-IZbWAAJ-FH19SQLr9Y_TZFYi0YqP3Qi9kbc3PuWsgXLaOd948VzHcuSUANEfltVFJDomD-14pwUg"

    const apiUrl = 'https://interview.lxper.ai'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Auth: `JWT ${token}`
        }
    })

const Questionnaire = (props) => {

    const [data, setData] = useState({
        number : "",
        direction : "",
        content : "",
        choices : [],
        anser : ""
    })

    const [best, setBest] = useState("") 

    const [choices3, setChoices3] = useState([])

    const [quest, setQuest] = useState(false)
  
    const { number, direction, content, anser} = data

    const onChange = e => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const onChangebest = e => {
        setBest(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    const addItem = () => {
        var arrayCopy = data
        arrayCopy.choices.unshift(best)
        setData(arrayCopy)
        console.log('확인사항', data)
    }

    const additem = () => {
        setChoices3([...choices3, 
            best
        ])
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='large text-primary text-center'>
                            새 질문 생성 
                        </h1>
                        <form onSubmit={e => onSubmit(e)}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">질문번호</label>
                                <div class="row">
                                    <div class="col-sm">
                                        <input type="number" 
                                        class="form-control" 
                                        placeholder="질문을 입력하세요"
                                        required
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
                                        required
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
                                        required
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
                                        required
                                        name='best'
                                        value={best}
                                        onChange={e => onChangebest(e)}
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <button onClick={ () => {
                                            setQuest(true)
                                            additem()
                                            addItem()
                                        }} class="btn btn-success">+</button>
                                    </div>       
                                </div>
                            </div>
                            {quest 
                            ? <div>
                                <ul>   
                                    {choices3.map((item, i) => (
                                        <li>      
                                            <input key={i} type="radio" name="anser" value={i} onChange={e => onChange(e)}/> {i}. {item}
                                        </li>
                                ))}
                                </ul>
                            </div>
                            : null
                            }
                            <p>*등록하신 답지 중 옳은 답 하나를 반드시 선택하고 제출하셔야 합니다.</p>
                            <button type="submit" class="btn btn-primary btn-lg">SUBMIT</button>
                            <button type="button" class="btn btn-secondary btn-lg">REST</button>
                            <button type="button" class="btn btn-secondary btn-lg">CANCEL</button>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Questionnaire;