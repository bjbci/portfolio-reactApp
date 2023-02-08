import React from 'react'
import {useState} from 'react'

//import Image
import AstrologyApp from '../assets/astrology.jpg'
import ConcertTickets from '../assets/concert-tickets.jpg'
import DailyPlanner from '../assets/daily-planner.jpg'
import OIP from '../assets/OIP.jpg'
import QuestionMark from '../assets/question-mark.jpg'
import Weather from '../assets/weather.jpg'
import CardApps from '../components/cards-apps'
// import {allApps} from '../helpers/allApps'


const Portfolio= props=>{

 const [allApps]=useState([

     {
         id:1,
         appName: "Daily Astrology App ",
         image: AstrologyApp,
         alt:"astrology-zodiac-wheel ",
         text:"DAILY ASTROLOGY APP FEATURING ZODIAC AND PHASES OF MERCURY ",
         githubLink:"https://github.com/bjbci/projectOne.git" 
     },
     {
         id:2,
         appName: "Concert Seats App ",
         image: ConcertTickets,
         alt:"music-concert-stadium-view ",
         text:"CONCERT EVENT SEAT RESERVATION APP ",
         githubLink:"https://github.com/adriennecordell/musical-chairs.git ",
         liveLink:" https://secret-hamlet-03727.herokuapp.com/"
     },
     {
         id:3,
         appName: "Daily Planner App ",
         image: DailyPlanner,
         alt:"daily-planner-pic ",
         text:"DAILY PLANNER APP WITH COLOR CODED HOURS OF THE DAY ",
         githubLink:"https://github.com/bjbci/week5_calendar.git "
     },
     {
         id:4,
         appName: "Text Editor App ",
         image: OIP,
         alt:"computer-with text on screen ",
         text:"INSTALLED TEXT EDITOR ",
         githubLink:"https://github.com/bjbci/another-text-editor.git "
     },
     {
         id:5,
         appName: "Project 3 App ",
         image: QuestionMark,
         alt:"image of a question mark ",
         text:"FINAL BOOTCAMP PROJECT TO BE ADDED SOON. ",
         githubLink:" "
     },
     {
         id:6,
         appName: "Weather App ",
         image: Weather,
         alt:"image of inclement weather ",
         text:"CURRENT AND FIVE DAY WEATHER FORCAST ",
         githubLink:"https://github.com/bjbci/weatherApp.git "
     }

 ])
        

    return (
//////////////////////////////////////////////////////////

{/* <>

<div className="container">
  <div className="row">
    <div className="col">
        <div className="card" style={{width: '18rem',margin:"10px",backgroundColor:"#198754"}}>
            <img src={AstrologyApp}
             className="card-img-top"
              alt="astrology-zodiac-wheel"/>
        <div className="card-body">
            <h5 className="card-title"
            style={{
                color:'black',
                fontSize:'30px'
            }}
            >DAILY ASTROLOGY</h5>
             <p className="card-text"
             style={{
                color:'black',
                fontSize:'20px'
            }}>DAILY ASTROLOGY APP FEATURING ZODIAC AND PHASES OF MERCURY</p>
        <a href="https://github.com/bjbci/projectOne.git" > <i className="bi bi-github"
    style={{
        color:'black',
        fontSize:'40px'
    }}></i></a>
        </div>
        </div>
    
    </div>

    <div className="col">
        <div className="card" style={{width:"18rem",margin:"10px",backgroundColor:"#198754"}}>
            <img src={ConcertTickets}
             className="card-img-top"
              alt="music-concert-stadium-view"/>
        <div className="card-body">
            <h5 className="card-title"
            style={{
                color:'black',
                fontSize:'30px'
            }}
            >MUSICAL CHAIRS</h5>
            <p className="card-text"
            style={{
                color:'black',
                fontSize:'20px'
            }}>CONCERT EVENT SEAT RESERVATION APP</p>
        <a href="#" > <i className="bi bi-github"
    style={{
        color:'black',
        fontSize:'40px'
    }}></i></a>
        </div>
        </div>
    
    </div>

    <div className="col">
        <div className="card" style={{width: "18rem",margin:"10px",backgroundColor:"#198754"}}>
             <img src={DailyPlanner}
              className="card-img-top" 
              alt="daily-planner-pic" />
        <div className="card-body">
            <h5 className="card-title"
            style={{
                color:'black',
                fontSize:'30px'
            }}
            >DAILY PLANNER</h5>
             <p className="card-text"style={{
                color:'black',
                fontSize:'20px'
            }}
             >DAILY PLANNER APP WITH COLOR CODED HOURS OF THE DAY</p>
        <a href="https://github.com/bjbci/week5_calendar.git" > <i className="bi bi-github"
    style={{
        color:'black',
        fontSize:'40px'
    }}></i></a>
        </div>
        </div>
        
    </div>
</div>


  <div className="row">
    <div className="col">
        <div className="card" style={{width: "18rem",margin:"10px",backgroundColor:"#198754"}}>
            <img src={OIP} 
            className="card-img-top" 
            alt="computer-with text on screen"/>
        <div className="card-body">
            <h5 className="card-title"
            style={{
                color:'black',
                fontSize:'30px'
            }}
            >J.A.T.E.</h5>
            <p className="card-text" style={{
                color:'black',
                fontSize:'20px'
            }}
            >INSTALLED TEXT EDITOR</p>
    <a href="https://github.com/bjbci/another-text-editor.git"> <i className="bi bi-github"
 style={{
    color:'black',
    fontSize:'40px'
 }}></i></a>
        </div>
        </div>
    
    </div>

    <div className="col">
        <div className="card" style={{width: "18rem",margin:"10px",backgroundColor:"#198754"}}>
            <img src={QuestionMark}
            className="card-img-top" 
            // style={{height:"175px"}}
            alt="image of a question mark"/>
        <div className="card-body">
            <h5 className="card-title"
            style={{
                color:'black',
                fontSize:'30px'
            }}
            >FINAL PROJECT</h5>
            <p className="card-text" style={{
                color:'black',
                fontSize:'20px'
            }}
            >FINAL BOOTCAMP PROJECT TO BE ADDED SOON.</p>
    <a href="#" > <i className="bi bi-github"
 style={{
    color:'black',
    fontSize:'40px'
 }}></i></a>
         </div>
         </div>
   
    </div>

    <div className="col">
        <div className="card" style={{width:"18rem",margin:"10px",backgroundColor:"#198754"}}>
            <img src={Weather}
             className="card-img-top"
              alt="image of inclement weather"/>
        <div className="card-body" >
            <h5 className="card-title"
             style={{
                color:'black',
                fontSize:'30px'
            }}
            > WEATHER APP</h5>
            <p className="card-text" style={{
                color:'black',
                fontSize:'20px'
            }}
            >CURRENT AND FIVE DAY WEATHER FORCAST</p>
    <a href="https://github.com/bjbci/weatherApp.git"> <i className="bi bi-github"
 style={{
    color:'black',
    fontSize:'40px'
 }}></i></a>
        </div>
        </div>
    
    </div>

  </div>
</div>

</> */}
//////////////////////////////////////////////////////
///////////////////////////////////////////////////
<Container 
className="mt-5 bg-success"
style={{borderRadius:"50px"}}
>
  


<CardApps />
  

   


</Container> 



)
}



export default Portfolio
 