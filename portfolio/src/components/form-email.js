import Input from './input'

//const FormEmail=  ()=>{
 const FormEmail=  ({term, setTerm, handleSubmit})=>{
    return (
<form>
<Input
            value={term}
            onChange={event=>setTerm(event.target.value)}
            name="contact-name"
            className="form-controls bg-dark text-light"
            placeholder="enter email333"
            type="email"
            />

</form>
    )
}


export default FormEmail


