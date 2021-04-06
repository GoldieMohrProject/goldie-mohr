import { useState, useRef } from 'react'
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

    const [click, setClick] = useState(0)

    const [score, setScore] = useState(0)
    const [givenAnswer, setGivenAnswer] = useState(false)
    const [showSave, setShowSave] = useState(false)
    const [showNext, setShowNext] = useState(true)
    const [style, setStyle] = useState('btn btn-info')
    const [isNextClicked, setIsNextClicked] = useState(false)
    const [counter, setCounter] = useState(0)
    const refAnswerButton1 = useRef(null);
    const refAnswerButton2 = useRef(null);
    const refAnswerButton3 = useRef(null);
    const [isSave, setIsSave] = useState(true)

    const quiz = () => {
        setClick(true);
        setIsNextClicked(true);
        setIsSave(false)
        setShowSave(false)
        setShowNext(true)
    }

    console.log(click)

    const answer = (buttonId, question, answer) => {

        if (isNextClicked) {
            if (question.correct === answer) {
                setScore(score + 1);
                changeColor(buttonId, true);
                setIsNextClicked(false);


            } else {
                changeColor(buttonId, false);
                setIsNextClicked(false);
            }
            setGivenAnswer(true);
            if (click >= 5) {
                setShowSave(true)
                setShowNext(false)
            }
        }
    }

    const getNextQuestion = () => {
        if (givenAnswer) {
            setCounter(counter + 1)
            setClick(click + 1)
            setIsNextClicked(true)
            refAnswerButton1.current.className = style;
            refAnswerButton2.current.className = style;
            refAnswerButton3.current.className = style;
            setGivenAnswer(false);
        } else {
            alert("please choose at least one option!")
        }
    }

    const changeColor = (buttonId, correct) => {
        if (correct) {
            switch (buttonId) {
                case 1:
                    refAnswerButton1.current.className = 'btn btn-success';
                    refAnswerButton2.current.className = 'btn btn-danger';
                    refAnswerButton3.current.className = 'btn btn-danger';
                    break;
                case 2:
                    refAnswerButton2.current.className = 'btn btn-success';
                    refAnswerButton1.current.className = 'btn btn-danger';
                    refAnswerButton3.current.className = 'btn btn-danger';
                    break;
                case 3:
                    refAnswerButton3.current.className = 'btn btn-success';
                    refAnswerButton2.current.className = 'btn btn-danger';
                    refAnswerButton1.current.className = 'btn btn-danger';
                    break;
                default:
                    break;
            }
        } else {
            switch (buttonId) {
                case 1:
                    refAnswerButton1.current.className = 'btn btn-danger';
                    break;
                case 2:
                    refAnswerButton2.current.className = 'btn btn-danger';
                    break;
                case 3:
                    refAnswerButton3.current.className = 'btn btn-danger';
                    break;
                default:
                    break;
            }
        }

    }

    const Save = async () => {

        const fetchOptionsUser = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                // looks for a session entry in localStorage, and if so pass it
                // 'Session': localStorage.session || ''
            }
        }

        let user = await fetch(`/api/users/findByEmail/${localStorage.getItem('email')}`, fetchOptionsUser).then(res => res.json())
        // let user = await fetch( '/api/users/findByEmail/mary1990ay@gmail.com','get').then( res=>res.json())

        console.log(user)
        const userScore = {
            userID: user.userData.id,
            score: score
        }
        const fetchOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // looks for a session entry in localStorage, and if so pass it
                // 'Session': localStorage.session || ''
            },
            body: JSON.stringify(userScore)
        }

        setIsSave(true);
        setClick(0);
        setScore(0);
        setCounter(0);
        setGivenAnswer(false);

        let x = await fetch('/api/users/score', fetchOptions).then(res => res.json())

        
       
    }

    {
        if (!isSave)
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <>

                                < h3 >{questions[counter].question}</h3>
                                
                                <div className="row">
                                    <div className="col">
                                        <button ref={refAnswerButton1} className={style} onClick={() => answer(1, questions[counter], questions[counter].answers[0])} style={{ margin: "5px", width: "200px" }}>{questions[counter].answers[0]}</button>
                                    </div>
                                    <div className="col">
                                        <button ref={refAnswerButton2} className={style} onClick={() => answer(2, questions[counter], questions[counter].answers[1])} style={{ margin: "5px", width: "200px" }}>{questions[counter].answers[1]}</button>
                                    </div>
                                    <div id="2" className="col">
                                        <button ref={refAnswerButton3} className={style} onClick={() => answer(3, questions[counter], questions[counter].answers[2])} style={{ margin: "5px", width: "200px" }}>{questions[counter].answers[2]}</button>
                                    </div>
                                </div>

                                {showNext && <button className="btn btn-success" style={{ margin: "5px", width: "200px" }} onClick={() => getNextQuestion()}>Next</button>}

                                <h1 style={{ textAlign: "center" }}>Score: {score}</h1>
                                {showSave &&
                                    <button className="btn btn-success" style={{ margin: "5px", width: "200px" }} onClick={() => Save()}>Save</button>
                                }

                            </>


                        </div>
                    </div>
                </>
            )
    }

    if (isSave)

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
                                <div class="d-grid gap-2 col-3 mx-auto mt-5 mb-5">
                                    <button className="btn btn-primary" style={{ color: 'white' }} onClick={quiz}>Quiz</button>
                                 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        )
}

export default Training;