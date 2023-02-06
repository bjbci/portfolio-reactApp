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
            <div className="app-list">
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