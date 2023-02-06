import React from 'react'
import {useState} from 'react'
import Container from '../components/container'
import Form from '../components/form'
import FormEmail from '../components/form-email'
import FormMessage from '../components/form-message'
import FormName from '../components/form-name'
import Button from '../components/button-submit'

const Contact= props=>{
    
    //provide the current state from the parent and the setter function from the parent-which is provided to the form and sent to form.js
    const [term, setTerm]=useState('')//React can be changed to whatever

const submitForm=()=>{
    console.log('submitting info', term)

}
     return (
        <Container className="mt-5 bg-success">
           <h2>CONTACT BRIAN</h2>

            <FormName 
            term={term}
            setTerm={setTerm} 
            handleSubmit={submitForm}
            /> 

            <FormEmail 
            term={term}
            setTerm={setTerm} 
            handleSubmit={submitForm}
            /> 

            <FormMessage
            term={term}
            setTerm={setTerm} 
            handleSubmit={submitForm}
            /> 

            <Button>SUBMIT</Button> 


        </Container> 

    

    )
}


export default Contact