import {useState} from 'react'
import Container from '../components/container'
import Form from '../components/form'
import FormEmail from '../components/form-email'
import FormMessage from '../components/form-message'
import FormName from '../components/form-name'

const Contact= props=>{
    //provide the current state from the parent and the setter function from the parent-which is provided to the form and sent to form.js
    const [term, setTerm]=useState('Enter Name')//React can be changed to whatever

const submitForm=()=>{

}


    return (
        <Container className="mt-5 bg-success">
           <h2>CONTACT BRIAN</h2>

 <Form 
term={term}
setTerm={setTerm}
handleSubmit={submitForm}
/>
<FormName

/>
<FormEmail

/>
<FormMessage

/>
        </Container>


    )
    
}


export default Contact