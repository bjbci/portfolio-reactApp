import React, {useState} from 'react'
import Input from './input'

export default function ContactForm(){
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [messageSection, setMessageSection]=useState('')

    const handleChange=event=>{
        if(event.target.name==='username'){
            setUsername(event.target.value)
        }else if(event.target.email==='email'){
            setEmail(event.target.value)
        }else if(event.target.value) {
            setMessageSection(event.target.value)
        }
    }

return(
    <form className='container'>

         <div className="mb-3">
            <label htmlFor="username"
            className="form-label">
            Username: {username}</label>
            <input 
            name="username" 
            value={username}
             onChange={handleChange}
            type="text" 
            className="form-control" />
         </div>

        <div className="mb-3">
            <label htmlFor="email" 
            className="form-label">
            Email address: {email}</label>
            <input
             name="email" 
             value={email}
             onChange={handleChange}
             type="email"
            className="form-control" />
        </div>
        
         <div className="mb-3">
            <label htmlFor="message-section"
            className="form-label" >
            Write your message here: {messageSection}
            </label>
            <input name="message-section"
            value={messageSection}
            onChange={handleChange}
            type="text" 
            className="form-control" />
        </div>
    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
     
       
    </form>
    )
}






//  export default ContactForm 
