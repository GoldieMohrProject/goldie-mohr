import React from 'react'
import Indeed from '../Job/Indeed.png'

function Job(props) {
    return (

        <div className="card col-12 col-lg-5 col-xl-5 col-md-5" style={{ width: "24rem", borderTop: "5px solid #3178C6", margin: "25px", borderRadius: "0px" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div style={{ textAlign: "right", marginTop: "5px" }}>
                    <a id="indeedLogo" href={props.link} target="_blank" rel="noreferrer" title="Apply on Indeed"><img class="img-fluid" width="80px" src={Indeed} alt="Indeed Job Opportunity" /></a>
                </div>
            </div>
        </div>

    )
}

export default Job