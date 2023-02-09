import React from 'react'
import {useState} from 'react'

const CardApps= ({cardApps})=>{

    const{id,appName,image,text,githubLink,liveLink}=cardApps
    return (
       <div className="cardsApps" key={id}>
        <img src=""

           <div style={{backgroundImage: `url(${image})`}} className="background-image"></div>
           <h2> {appName}</h2>
         

       </div>
        
    )
    
}


export default CardApps


