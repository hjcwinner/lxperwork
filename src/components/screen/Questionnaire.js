import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

const Questionnaire = (props) => {

    const [data, setData] = useState({
        number : "",
        direction : "",
        content : "",
        choices : [],
        answer : ""
    })

    const { number, direction, content, choices, answer } = data

    const onChange = e => {
        setData({...data, [e.target.name] : e.target.value})
        console.log(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        axios.post('http://interview.lxper.ai/api/questions', data)
            .then(res => {
                console.log(res)
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
                                        name='choices'
                                        value={choices}
                                        onChange={e => onChange(e)}
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <button onClick={ () => {} } type="button" class="btn btn-success">+</button>
                                    </div>
                                </div>
                                <br/>
                                <p>*등록하신 답지 중 옳은 답 하나를 반드시 선택하고 제출하셔야 합니다.</p>
                            </div>
                        </form>
                        <br/>
                        <div>
                            <button type="submit" class="btn btn-primary btn-lg">SUBMIT</button>
                            <button type="button" class="btn btn-secondary btn-lg">REST</button>
                            <button type="button" class="btn btn-secondary btn-lg">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Questionnaire;