import React from 'react'
import {useState} from 'react'
import CardApps from '../components/cards-apps'
//import Image
import AstrologyApp from '../assets/astrology.jpg'
import ConcertTickets from '../assets/concert-tickets.jpg'
import DailyPlanner from '../assets/daily-planner.jpg'
import OIP from '../assets/OIP.jpg'
import QuestionMark from '../assets/question-mark.jpg'
import Weather from '../assets/weather.jpg'
import {allApps} from '../helpers/allApps'


const Portfolio= props=>{
    return (
        <div className="apps">
            <h1>MY PORTFOLIO</h1>
            <div className="app-list" style={{
                display:"flex",
                flexWrap:"wrap"
            }}>
                {allApps.map(()=>{
                    return <img alt={allApps.name} src={allApps.image}/>
                })}
            <img alt="Astrology" src={AstrologyApp}/>
           <img alt="Tickets" src={ConcertTickets}/>
           <img alt="Project-3" src={DailyPlanner}/>
           <img alt="Weather-App" src={OIP}/>
           <img alt="Text-Editor" src={QuestionMark}/>
           <img alt="Daily-Calendar"src={Weather} />

            </div>
        </div>

    )
    
}


export default Portfolio
//BOOTSTRAP BOOTSTRAP BOOTSTRAP BOOTSTRAP
// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Astrology App</h5>
//     <p class="card-text">Daily Astrology Info.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>