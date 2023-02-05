const Navbar= ({view, setView})=>{
    // console.log(view, setView)
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-success">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a 
                    className="nav-link"
                    href="#"
             >
                ABOUT ME
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    className="nav-link"
                    href="#"
             >
                CONTACT
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    className="nav-link" 
                    href="#"
            >
                PORTFOLIO
                </a>
            </li>
            <li className="nav-item">
                 <a 
                    className="nav-link" 
                    href="#"
            >
                RESUME
                </a>
            </li>
             </ul>
     </div>
</nav>
    )
}


export default Navbar