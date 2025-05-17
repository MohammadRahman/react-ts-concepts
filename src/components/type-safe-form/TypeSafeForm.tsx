import { useForm } from "react-hook-form";
import FormRow from "./FormRow";

interface FormFields{
    id: string;
    name: string;
    email: string;    
}
const TypeSafeForm = () => {

    const {register, handleSubmit, formState:{errors}}= useForm<FormFields>();

    function formSubmitHandler(values: FormFields){
        console.log(values);
    }

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
        <FormRow label="Name" error={errors.name?.message}>
            <input id="name" type="text" {...register("name", {required:"Name is required"})}/>
        </FormRow>
        <FormRow label="Email" error={errors.email?.message}>
            <input id="email" type="text" {...register("email", {required:"Email is required"})}/>
        </FormRow>
        <button type="submit">submit</button>
    </form>
  )
}

export default TypeSafeForm;