import {useState} from 'react'
import Container from '../components/container'
import Form from '../components/form'

const Contact= props=>{
    const [term, setTerm]=useState('React')//React can be changed to whatever
    return (
        <Container className="mt-5 bg-success">
           <h2>CONTACT BRIAN</h2>

 <Form />

        </Container>


    )
    
}


export default Contact