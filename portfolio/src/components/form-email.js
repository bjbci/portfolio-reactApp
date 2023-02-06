import Input from './input'

const FormEmail=  ({term, setTerm, handleSubmit})=>{
    return (
<form>
<Input
            value={term}
            onChange={event=>setTerm(event.target.value)}
            name="contact"
            className="form-controls bg-dark text-light"
            placeholder="enter email333"
            type="text"
            />

</form>
    )
}


export default FormEmail


