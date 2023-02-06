import Input from './input'

//const FormMessage=  ({...props})=>{
 const FormMessage=  ({term, setTerm, handleSubmit})=>{  
    return (
<form>
<Input
            value={term}
            onChange={event=>setTerm(event.target.value)}
            name="contact"
            className="form-controls bg-dark text-light"
            placeholder="enter text4444"
            type="text"
            />

</form>
    )
}

export default FormMessage