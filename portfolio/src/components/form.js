import Button from './button-submit'
import FormName from './form-name'
import FormEmail from './form-email'
import FormMessage from './form-message'
import Input from './input'
import Row from './row'

const Form= ({term, setTerm, handleSubmit})=>{
    return (

        <form>
            {/* <Input
            value={term}
            onChange={event=>setTerm(event.target.value)}
            name="contact"
            className="form-controls bg-dark text-light"
            placeholder="enter name"
            type="text"
            />

<Input
            name="email"
            className="form-controls bg-dark text-light"
            placeholder="enter email"
            type="text"
            />

<Input
            name="contact"
            className="form-controls bg-dark text-light"
            placeholder="enter message"
            type="text"
            /> */}

<FormName className=''>ENTER NAME</FormName>
<FormEmail className=''>ENTER EMAIL</FormEmail>   
<FormMessage className=''>ENTER MESSAGE</FormMessage>      
<Button>SUBMIT</Button>

        </form>
    )
    
}


export default Form

