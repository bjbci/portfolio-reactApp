import {useState} from 'react'
import Container from '../components/container'

const Contact= props=>{
    const [term, setTerm]=useState('React')//React can be changed to whatever
    return (
        <Container className="mt-5 bg-success">
           <h2>CONTACT BRIAN</h2>

           <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>

        </Container>


    )
    
}


export default Contact