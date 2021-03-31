import React from 'react'
import './style.css'

function Training() {
    return (
        <div>

            <div className="trainingarea">
                <h1>Training</h1>
                <p>Please watch the video below</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4bkr5lpKGUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>After watching the video, please click <a href="https://www.mysafetysign.com/free-crane-safety-quiz" target="_blank">here</a> to take the test</p>
            </div>

        </div>
    )
}

export default Training;