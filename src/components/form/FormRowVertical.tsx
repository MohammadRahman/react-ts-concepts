/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

interface IFormRowVertical {
    label: string;
    children: ReactNode;
    errors: string | undefined;
}
export const FormRowVertical = ({label, children, errors}: IFormRowVertical) => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:"10px"}}>
        <label htmlFor={(children as any)?.props?.id}>{label}</label>
        {children}
       {errors && <p style={{color: 'red'}}>{errors}</p>}
    </div>
  )
}
