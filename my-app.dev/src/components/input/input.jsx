export const Input = ({type, name, id, placeholder, className, onChange, style}) => {
    return(
        <input type={type} name={name} id={id} className={className} placeholder={placeholder} onChange={onChange} style={style}></input>
    );
}