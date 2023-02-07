import React from 'react'
import Avatar from '../assets/avatar.jpg'

const About= props=>{
    return (
    <div className="about container" style={{
        display:"flex"
    }}>
        <>
        <div className='avatar-img'>
            <img alt="Avatar" src={Avatar}
            style={{
                margin:'40px'}}/>
        </div>
        </>
        <>
        <div className="about-me" 
         style={{
            margin:'40px 0px 0px 0px',
            padding:'0px'
        }}>

            <div>
            <h2>BRIAN</h2>
                <div className="prompt">
                    <p>An experienced cardiac cath lab nurse with expanding tech skills. Brian has spent hundreds of hours over the last six months attempting to master the foundations and intricacies of numerous coding methods and coding languages.</p>
                </div>

            </div>
        </div>
        

        <div className="skills"
        style={{
            margin:'40px 80px 0px 180px',
            padding:'0px 100px 0px 20px'
        }}>
            <h2>SKILLS</h2>
            <div className="skills-list">
                <div className="skill-items">
                    <h4>FRONT END</h4>
                    <ul>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>JQUERY</li>
                    <li>BOOTSTRAP</li>

                    </ul>
                </div>
                <div className="skill-items">
                    <h4>BACK END</h4>
                    <ul>
                    <li>REACT</li>
                    <li>PWA</li>
                    <li>ORM</li>
                    <li>EXPRESS.JS</li>
                    <li>NODE.JS</li>
                    <li>GRAPHQL</li>
                    <li>NoSQL</li>
                    <li>MONGODB</li>

                    </ul>
                   
                </div>
            </div>
        </div>
        </>
    </div>
    )
}




export default About