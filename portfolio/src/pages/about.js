import React from 'react'

const About= props=>{
    return (

    <div className="about container">
        <div className="about-me"></div>
            <h2>BRIAN</h2>
            <div className="prompt"><p>An experienced cardiac cath lab nurse with expanding tech skills</p></div>

        <div className="skills">
            <h2>SKILLS</h2>
            <ol className="skills-list">
                <li className="skill-items">
                    <h3>FRONT END</h3>
                    <span>HTML CSS JS JQUERY BOOTSTRAP</span>
                </li>
                <li className="skill-items">
                    <h3>BACK END</h3>
                    <span>REACT PWA ORM EXPRESS.JS NODE.JS GRAPHQL NoSQL MONGOOSE MONGODB</span>
                </li>

            </ol>


        </div>

    </div>
    )
    
}


export default About