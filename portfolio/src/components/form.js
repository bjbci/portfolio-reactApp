import Button from './button-submit'
import Input from './input'
import Row from './row'

const Form= ()=>{
    return (

        <form>
            <Input
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
            />
            
<Button>SUBMIT</Button>

        </form>
    )
    
}


export default Form

