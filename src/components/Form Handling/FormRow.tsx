import { ReactNode } from "react";

type Error = {
    name: string;
    message: string;
}

type FormRowProps = {
    label?: string;
    error: Error | null;
    children: ReactNode;
    name: string;
}
const FormRow = ({label,name, error, children}: FormRowProps) => {
  
    return (
    <div>
        <label htmlFor={name}>{label}</label>
        {children}
        {error && error.name === name &&(
            <p id={`${name}-error`} style={{color: 'red'}}>{error.message}</p>
        )}    
    </div>
  )
}

export default FormRow;