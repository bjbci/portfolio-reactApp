import React, {useState} from 'react'


import {validateEmail} from '../helpers/email-validate'

export default function ContactForm(){
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [message, setMessage]=useState('')

    const[errorMessage,setErrorMessage]=useState('')

    const handleChange=event=>{
        if(event.target.name==='username'){
            setUsername(event.target.value)
        }else if(event.target.name==='email'){
            setEmail(event.target.value)
        }else  {
            setMessage(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('submitting to server')
     
        if(!validateEmail(email)){
            setErrorMessage('Email is invalid. Please enter valid email address')
            return
        }
        if(!username || !email || !message){
            setErrorMessage('This FIeld Is Required')
            return
        }
        setUsername('')
        setEmail('')
        setMessage('')
    };

return(
    <>
    <form className='container' onSubmit={handleSubmit}
    style={{
        padding:"50px"
    }}
    >

         <div className="mb-3">
            <label htmlFor="username"
            className="form-label">
            Username: </label>
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
            Email address: </label>
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
            Write your message here:
            </label>
            <input
             name="message-section"
            value={message}
            onChange={handleChange}
            type="text" 
            className="form-control" />
       </div>

        <button type="submit"
            className="btn btn-primary">
            Submit
        </button>
     
     </form>
    {errorMessage && (
        <div>
             <p className="error-text">{errorMessage}</p>
        </div>
    )}
    </>
    );
}






 
