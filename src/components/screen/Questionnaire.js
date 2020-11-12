import axios from 'axios';
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'

const token = "eyJraWQiOiJCbFg3aDdTNktkdTR0VDdSa1E0b1JQVTlfenJRRGZLRW9fck12TVRyTDFNIiwiYWxnIjoiUFMyNTYifQ.eyJ1c2VySUQiOiIwNWM4MTFjNC01MTlmLTQ0ZDktOWJiYi0zMDY2NWFlNzc3MzgiLCJuYW1lIjoi7ZWY7KCV7LKgIiwiaWF0IjoxNjA1MDcxMjY2fQ.EbE6OdRSgtIiMVDeqE22G9Y56aLJCZZMJTdVYBkfFyPPP5ouVaUs3x8fvS_JotThBbsfTvyi6SMJKE7kAiel5474KWfAajtuf5-nV4gQ-c1riufbUFo2Xsi0kxnJytZKbGSnTE5bZ0gE4MY0OSTlN3Alhghvtl0lMP-sjWpLdJHeaOIn0vFuPF1atMV8Pp0M-lbejY4lg4Ais7ssYfsbGW0ONCi5ahMVY10keb590DY7IlxwFNXLHX3KiXzgegRJaYjDPI-VfkS0SGda4CMu4X1vQG1L2FLDOd8housDmMQ1Bhhii55qzISrpxxP275mNs3tmWhWwOyjo-H_7TuxXg"

    const apiUrl = 'https://interview.lxper.ai'

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Auth: `JWT ${token}`
        }
    })

const Questionnaire = (props) => { 

    const [data, setData] = useState({
        id: "",
        number: 0,
        direction: "",
        content: "",
        choices: [
            ""
        ],
        answer: 0
    })


    const [best, setBest] = useState("") 

    const [choices3, setChoices3] = useState([])

    const [quest, setQuest] = useState(false)

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
        setChoices3([...choices3, 
            best
        ])
    }

    const onSubmit = e => {
        e.preventDefault()
        // const body = JSON.stringify(data);
        // console.log(body)
        // authAxios.post("/api/questions", body)
        console.log(data)
        authAxios.post("/api/questions", data)
        .then(res => {
            console.log(res)
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
                                            setQuest(true)
                                            additem()
                                            
                                        }} class="btn btn-primary btn-lg" type="button">+</button>
                                    </div>       
                                </div>
                            </div>
                            {quest 
                            ? <div>
                                <ul>   
                                    {choices3.map((item, i) => (
                                        <li>      
                                            <input key={i} type="radio" name="answer" value={i} onChange={e => onChange(e)}/> {i+1}. {item}
                                        </li>
                                ))}
                                </ul>
                            </div>
                            : null
                            }
                            <p>*등록하신 답지 중 옳은 답 하나를 반드시 선택하고 제출하셔야 합니다.</p>
                            <button type="submit" onClick={ () => {choiadd()}} class="btn btn-primary btn-lg">SUBMIT</button>
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

Questionnaire.propTypes = {
    id : PropTypes.string,
    number : PropTypes.number,
    direction : PropTypes.string,
    content : PropTypes.string,
    choices : PropTypes.array,
    answer : PropTypes.number,
}

export default Questionnaire;