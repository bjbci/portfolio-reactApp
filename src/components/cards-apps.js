// import React from 'react'
// import {useState} from 'react'

// const CardApps= ({cardApps})=>{

//     const{id,appName,image,text,githubLink,liveLink}=cardApps
//     return (
//        <div className="cardsApps" key={id}>
//         <img src={require(`../../assets/${name}""

//            <div style={{backgroundImage: `url(${image})`}} className="background-image"></div>
//            <h2> {appName}</h2>
         

//        </div>
        
//     )
    
// }


// export default CardApps
//import Image
import AstrologyApp from '../assets/astrology.jpg'
import ConcertTickets from '../assets/concertTickets.jpg'
import DailyPlanner from '../assets/dailyPlanner.jpg'
import OIP from '../assets/OIP.jpg'
import QuestionMark from '../assets/question-mark.jpg'
import Weather from '../assets/weather.jpg'


const CardApps =(props)=>{

    console.log(props.allApps)
    {props.allApps.map((app)=>{
    if(app.liveLink==='x') {
        app.liveLink=' '
    } else{
     <a><i className="bi bi-tv"
    style={{
        color:'black',
        fontSize:'40px'
     }}>    
     </i></a>
    }}
        )}
// if(props.liveLink){  <a href={props.liveLink} >
// <i className="bi bi-tv"
// style={{
//    color:'black',
//    fontSize:'40px'
// }}>    
// </i></a>
// }else{
//     <a href={props.liveLink} >
//     <i className=" "
//     style={{
//        color:'black',
//        fontSize:'40px'
//     }}>    
//     </i></a>
// }

    return (

        <ul>
            {/* <li>{props.allApps[0].appName}| {props.allApps[0].image}</li>
            <li>{props.allApps[1].appName}| {props.allApps[1].image}</li>
            <li>{props.allApps[2].appName}| {props.allApps[2].image}</li>
            <li>{props.allApps[3].appName}| {props.allApps[3].image}</li>
            <li>{props.allApps[4].appName}| {props.allApps[4].image}</li>
            <li>{props.allApps[5].appName}| {props.allApps[5].image}</li> */}

            {props.allApps.map(app=>{
                return <li key={app.id}>
                    {/* </li>{app.appName}|{app.image} */}


        <div className="card" 
            style={{width: '18rem',margin:"10px",backgroundColor:"#198754"}}>
            <img src={app.image}
             className="card-img-top"
              alt={app.alt}/>
                <div className="card-body">
                    <h5 className="card-title"
                    style={{
                        color:'black',
                        fontSize:'30px'
                    }}>
                    {app.appName}
                    </h5>
                    <p className="card-text"
                    style={{
                        color:'black',
                        fontSize:'20px'
                    }}>
                    {app.text}
                    </p>
                    <a href={app.githubLink} >
                     <i className="bi bi-github"
                    style={{
                        color:'black',
                        fontSize:'40px'
                    }}>
                        </i></a>
                     <a href={app.liveLink} >
                     <i className="bi bi-tv"
                    style={{
                        color:'black',
                        fontSize:'40px'
                    }}>    
                   
                    </i></a>
                </div>
        </div>
    </li>

            })}
        </ul>
    )
}
export default CardApps


