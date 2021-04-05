import { useState } from 'react'
import './style.css'
import Emergency from '../../assets/Emergency.pdf'
import Safety from '../../assets/Safety.pdf'

const questions = [
    {
        question: "What is the World Population ?",
        answers: ["4 billion", "6.5 Billion", "7.5 Billion"],
        correct: "7.5 Billion"
    },
    {
        question: "How many countries are there in the world? ",
        answers: ["175", "195", "205"],
        correct: "195"
    },
    {
        question: "How many official languages are spoken in the world?",
        answers: ["6500", "4000", "5000"],
        correct: "6500"
    },
    {
        question: "How many continents are there in the world?",
        answers: ["5", "6", "7"],
        correct: "7"
    },
    {
        question: "What is the population of Canada 2020?",
        answers: ["33.5 Millions", "35.5 Millions", "37.5 Millions"],
        correct: "37.5 Millions"
    }
]
function Training() {



    const [click, setClick] = useState(false)
    const [score, setScore] = useState(0)

    const quiz = () => {
        console.log("clicked", click)
        setClick(true)
    }

    const answer = (index, answer, correctId) => {
        console.log('clicked', correctId)
        console.log(index)
        if (index === 0 && correctId === answer[2] || index === 1 && correctId === answer[1] || index === 2 && correctId === answer[0]
           || index === 3 && correctId === answer[2] || index === 4 && correctId === answer[2] ) {
            setScore(score + 1)

           
        }
    }

    

    {
        if (click)
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <>
                                {questions.map((data, index) => {

                                    let answer1 = data.answers

                                    return (
                                        <>
                                            <h3>{data.question}</h3>
                                            <div className="row">
                                                <div className="col">
                                                    <button class="btn btn-info" onClick={() => answer(index, answer1, data.answers[0])} style={{ margin: "5px", width: "200px", borderRadius: "15px" }}>{data.answers[0]}</button>
                                                </div>
                                                <div className="col">
                                                    <button class="btn btn-info" onClick={() => answer(index, answer1, data.answers[1])} style={{ margin: "5px", width: "200px", borderRadius: "15px" }}>{data.answers[1]}</button>
                                                </div>
                                                <div className="col">
                                                    <button class="btn btn-info" onClick={() => answer(index, answer1, data.answers[2])} style={{ margin: "5px", width: "200px", borderRadius: "15px" }}>{data.answers[2]}</button>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })}

                                <h1 style={{ textAlign: "center" }}>Score: {score}</h1>

                            </>


                        </div>
                    </div>
                </>
            )
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="trainingarea">
                        <h1 className="trainingtitle">Training</h1>
                        <p className="para">Please review the topics below</p>
                        <p className="para">
                            <a href={Emergency} className="pdf">CLICK HERE TO VIEW EMERGENCY PROCEDURES</a>
                        </p>
                        <p className="para">
                            <a href={Safety} className="pdf">CLICK HERE TO VIEW GML SAFETY INFORMATION</a>
                        </p>

                        <p className="para">After reviewing the topics above, please watch the video below</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4bkr5lpKGUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        {/* <p className="para">After watching the video, please click  to take the test</p> */}
                        <div className="row">
                            <div class="d-grid gap-2 col-4 mx-auto mt-5 mb-5">
                                <button className="btn btn-success" style={{ color: 'white' }} onClick={quiz}>Quiz</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Training;