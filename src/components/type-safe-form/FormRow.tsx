import { ReactElement } from 'react'

interface FormRowProp{
    children: ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
    label: string;
    error?: string;
}

const FormRow = ({children, label, error}:FormRowProp) => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
        <label htmlFor={children.props.id}>{label}</label>
        {children}
        {error && (<span style={{color:'red'}}>{error}</span>)} 
    </div>
  )
}

export default FormRow;