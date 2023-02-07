const Footer= ({view,setVIew})=>{

    return (
//  <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-success">
//     <div className="container">
//         {/* <a className="navbar-brand" href="#"></a> */}
//             <ul className="navbar-nav">
//                  <div className="row">
//                      <div class="col align-self-center">
//                         <li className="nav-item">
//                             <a 
//                                 className="nav-link"
//                                 href="#"
//                         >
//                             <i className="bi bi-envelope" ></i>
//                             </a>
//                         </li>
//                         </div>
//                         <div class="col">
//                         <li className="nav-item">
//                             <a 
//                                 className="nav-link"
//                                 href="#"
//                         >
//                         <i className="bi bi-linkedin"></i>
//                             </a>
//                         </li>
//                         </div>
//                         <div class="col">
//                         <li className="nav-item">
//                             <a 
//                                 className="nav-link" 
//                                 href="#"
//                         >
//                         <i className="bi bi-github"></i>
//                             </a>
//                         </li>
//                     </div>
//             </div>
//              </ul>
//      </div>
// </nav>
   

<div className="row align-items-end">
<div className="col">
{/* <a 
 className="nav-link" 
 href="#"
>
 <i className="bi bi-github"></i>
 </a> */}
</div>
<div className="col" style={{
    display:"flex",
    justifyContent:"space-around"
}}>
<a 
 className="nav-link" 
 href="#"
>
 <i className="bi bi-github"></i>
 </a> 
<a 
 className="nav-link"
href="#"
>
<i className="bi bi-linkedin"></i>
</a>
<a 
 className="nav-link"
 href="#"
 >
<i className="bi bi-envelope" ></i>
 </a>
</div>
<div className="col">
{/* <a 
 className="nav-link"
 href="#"
 >
<i className="bi bi-envelope" ></i>
 </a> */}
</div>
</div>

) 




}



export default Footer