import React from 'react'
import './style.css'
import Emergency from '../../assets/Emergency.pdf'
import Safety from '../../assets/Safety.pdf'

function Training() {
    return (
        <div>

            <div className="trainingarea">
                <h1 className="trainingtitle">Training</h1>
                <p>Please review the topics below</p>
                <p>
                    <a href={Emergency} className="pdf">CLICK HERE TO VIEW EMERGENCY PROCEDURES</a>
                </p>
                <p>
                    <a href={Safety} className="pdf">CLICK HERE TO VIEW GML SAFETY INFORMATION</a>
                </p>

                <p>After reviewing the topics above, please watch the video below</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4bkr5lpKGUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>After watching the video, please click <a href="https://www.mysafetysign.com/free-crane-safety-quiz" target="_blank">here</a> to take the test</p>
            </div>

        </div>
    )
}

export default Training;