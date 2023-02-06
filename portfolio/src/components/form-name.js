import Input from './input'

const FormName=  ({term, setTerm,handleSubmit})=>{
//const FormName=  ({term, setTerm, handleSubmit})=>{  
    return (
<form>
<Input
            value={term}
            onChange={event=>setTerm(event.target.value)}
            name="contact"
            className="form-controls bg-dark text-light"
            placeholder="enter name1111"
            type="text"
            />

</form>
    )
}


export default FormName