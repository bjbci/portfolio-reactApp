const ButtonSubmit= ({children,className='btn-dark', ...restOfProps})=>{
    return (
        <button className={`btn  ${className}`}{...restOfProps}>
            {children}
        </button>
    )
    
}


export default ButtonSubmit