const Footer= ({view,setVIew})=>{

    return (
 <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-success">
  


<div className="col">

</div>
<div className="col" style={{
    display:"flex",
    justifyContent:"space-around"
}}>
<a 
 className="nav-link" 
 href="https://github.com/bjbci?tab=repositories"
>
 <i className="bi bi-github"
 style={{
    color:'black',
    fontSize:'40px'
 }}></i>
 </a> 
<a 
 className="nav-link"
href="#"
>
<i className="bi bi-linkedin"
 style={{
    color:'black',
    fontSize:'40px'
 }}></i>
</a>
<a 
 className="nav-link"
 href="mailto:bajebi.bb@gmail.com"
 >
<i className="bi bi-envelope"
 style={{
    color:'black',
    fontSize:'40px'
 }} ></i>
 </a>
</div>
<div className="col">

</div>


</nav>
   


) 




}



export default Footer