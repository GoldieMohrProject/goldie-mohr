import React from 'react'
import Job from '../../Components/Job'
import './style.css'

function Career() {
    return (
        <>
            <div id="careerImage">
                <h1 id="careerTitle">CAREER</h1>
            </div>
            <div className="container">
                <div style={{ marginBottom: "40px", marginTop: "40px" }}>
                    <div className="row">
                        <Job title="AZ Truck Driver" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                        <Job title="Administration/Accounting" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                        <Job title="Health and Safety Coordinator" description="The Health & Safety Coordinator will play a key role in the management, sustainability, and training of industry best practices for Health and Safety with a goal to become COR certified."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                        <Job title="Winter Maintenance Operator" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career