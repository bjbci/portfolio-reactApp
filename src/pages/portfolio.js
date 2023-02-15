import React from 'react'
import {useState} from 'react'
import CardApps from '../components/cards-apps'

//import Image
import AstrologyApp from '../assets/astrology.jpg'
import ConcertTickets from '../assets/concertTickets.jpg'
import DailyPlanner from '../assets/dailyPlanner.jpg'
import OIP from '../assets/OIP.jpg'
import QuestionMark from '../assets/question-mark.jpg'
import Weather from '../assets/weather.jpg'

// import {allApps} from '../helpers/allApps'


function Portfolio(){

const [allApps]= useState([
    
    {
        id:0,
        appName: "Daily Astrology App ",
        //image: AstrologyApp,
        image: AstrologyApp,
        alt:"astrology-zodiac-wheel ",
        text:"DAILY ASTROLOGY APP FEATURING ZODIAC AND PHASES OF MERCURY ",
        githubLink:"https://github.com/bjbci/projectOne.git",
        liveLink: 'x'
    },
    {
        id:1,
        appName: "Concert Seats App ",
        // image: ConcertTickets,
        image: ConcertTickets,
        alt:"music-concert-stadium-view ",
        text:"CONCERT EVENT SEAT RESERVATION APP ",
        githubLink:"https://github.com/adriennecordell/musical-chairs.git",
        liveLink:" https://secret-hamlet-03727.herokuapp.com/"
    },
    {
        id:2,
        appName: "Daily Planner App ",
        image: DailyPlanner,
        // image: "dailyPlanner",
        alt:"daily-planner-pic ",
        text:"DAILY PLANNER APP WITH COLOR CODED HOURS OF THE DAY ",
        githubLink:"https://github.com/bjbci/week5_calendar.git",
        liveLink: 'x'
    },
    {
        id:3,
        appName: "Text Editor App ",
        // image: OIP,
        image: OIP,
        alt:"computer-with text on screen ",
        text:"INSTALLED TEXT EDITOR ",
        githubLink:"https://github.com/bjbci/another-text-editor.git",
        liveLink: 'x'
    },
    {
        id:4,
        appName: "Project 3 App ",
        image: QuestionMark,
        //image: "question-mark",
        alt:"image of a question mark ",
        text:"FINAL BOOTCAMP PROJECT TO BE ADDED SOON. ",
        githubLink:"https://github.com/bjbci?tab=repositories",
        liveLink:'x'
    },
    {
        id:5,
        appName: "Weather App ",
         image: Weather,
        //image: "weather",
        alt:"image of inclement weather ",
        text:"CURRENT AND FIVE DAY WEATHER FORCAST ",
        githubLink:"https://github.com/bjbci/weatherApp.git ",
        liveLink: 'x'
    },

])

    return (
       
    <div>
        <div className="flex-row" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            {allApps.map((app, i)=>(
                <CardApps 
                // allApps={allApps}
                app={app}
                key={"app" +i}
             />
            ))},
        </div>
    </div>

    )
}

        export default Portfolio     


   
