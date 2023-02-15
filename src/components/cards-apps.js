//  import React from 'react'
import React from 'react'



function CardApps ({app})  {

    const {appName, image, alt, text, githubLink, liveLink}= app



    return (
<div className="container text-center">
  <div className="row">
  {/* <div class="col">
   <div className="col-4">  */}
       <div className="card" 
            style={{width: '18rem',margin:"10px",backgroundColor:"#198754"}}>
            <div className="allApps" key={appName}>
                <img src={image}
                    className="card-img-top"
                    alt={alt}/>
                
                <div className="card-body">
                            <h5 className="card-title"
                            style={{
                                color:'black',
                            fontSize:'30px'
                        }}>
                            {appName}
                        </h5>
                    <div className="project-text">
                        <h3>
                        
                        <a href={githubLink}>
                        <i className="bi bi-github"
                            style={{
                                color:'black',
                                fontSize:'40px'
                            }}>
                                </i></a>
                        </h3>
                        <p>{text}</p>
                    </div>
                 </div>
            </div>     
        </div>
    {/* </div>  
    </div>    */}
</div>  
</div>   
      );
    }
    
   

    
    

 export default CardApps
