import { ChangeEvent } from "react";

type FormInputProps = {
  name: string;
  value: string;
  type?: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
};

const FormInput = ({id, name, error, value, type='text', onChange }: FormInputProps) => {
  return <input type={type} name={name} value={value} onChange={onChange}  aria-invalid={error}
  aria-describedby={error ? `${id}-error` : undefined}/>;
};

export default FormInput;
