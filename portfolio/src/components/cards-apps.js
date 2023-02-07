import React from 'react'
import {useState} from 'react'

const CardApps= ({image, appName})=>{
    return (
       <div className="cards-apps">

           <div style={{backgroundImage: `url(${image})`}} className="background-image"></div>
           <h2> {appName}</h2>
         

       </div>

    )
    
}


export default CardApps


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