import React from 'react'
import {useState} from 'react'
import CardApps from '../components/cards-apps'
//import Image
import AstrologyApp from '../assets/astrology.jpg '
import ConcertTickets from '../assets/concert-tickets.jpg '
import  DailyPlanner from '../assets/daily-planner.jpg '
import  OIP from '../assets/OIP.jpg '
import  QuestionMark from '../assets/question-mark.jpg '
import  Weather from '..assets/weather.jpg '


const Portfolio= props=>{
    return (
        <div className="apps">
            <h1>MY PORTFOLIO</h1>
            <div className="app-list">

            <AppItem name="Astrology" image="AstrologyApp"/>
           <AppItem name="Tickets" image="ConcertTickets"/>
           <AppItem name="Project-3" image="DailyPlanner"/>
           <AppItem name="Weather-App" image="OIP"/>
           <AppItem name="Text-Editor" image="QuestionMark"/>
           <AppItem name="Daily-Calendar"image="Weather" />
            </div>
        </div>

    )
    
}


export default Portfolio