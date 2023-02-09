import React from 'react'

const Resume= props=>{
    return (
<div className="container">
<section className="my-5">
<div className="my-2">
        
        <p> 
        Download my <a href="https://github.com/bjbci/portfolio-reactApp/Resume202008031.pdf">resume</a>
        </p>
<h2>EDUCATION</h2>
<ul className="education">
    <li>UNIVERSITY OF WISCONSIN
         BS-NURSING 2000</li>
    <li>UNIVERSITY OF WISCONSIN BOOTCAMP
        CERTIFICATE FULL STACK WEB DEVELOPMENT 2023
    </li>
</ul>


<h2>EXPERIENCE</h2>
<ul className="experience">
    <li>FROEDTERT HOSPITAL
        MILWAUKEE, WISCOSNIN
    </li>
    <li>HOUSTON METHODIST HOSPITAL TMC
        HOUSTON, TEXAS
    </li>
    <li>OREGON HEALTH AND SCIENCE HOSPITAL
        PORTLAND, OREGON
    </li>
</ul>


</div>
</section>

</div>

    )
    
}


export default Resume