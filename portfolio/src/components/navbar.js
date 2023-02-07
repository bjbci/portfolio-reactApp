import React from 'react'

const Navbar= ({view, setView})=>{
    // console.log(view, setView)
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-success">
    <div className="container">
        <a className="navbar-brand" href="#">BRIAN</a>
            <div className="navbar-nav">
            <li className="nav-item">
                <a 
                    onClick={() =>setView('about')}
                    className={`nav-link ${view==='about' ? "active fw-bold" : ''}`}
                    href="#"
             >
                ABOUT ME
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    onClick={() =>setView('contact')}
                    className={`nav-link ${view==='contact' ? "active fw-bold" : ''}`}
                    href="#"
             >
                CONTACT
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    onClick={() =>setView('portfolio')}
                    className= {`nav-link ${view==='portfolio' ? "active fw-bold" : ''}`}
                    href="#"
            >
                PORTFOLIO
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    onClick={() =>setView('resume')}
                    className={`nav-link ${view==='resume' ? "active fw-bold" : ''}`} 
                    href="#"
            >
                RESUME
                </a>
            </li>
             </div>
     </div>
</nav>
    )
}


export default Navbar