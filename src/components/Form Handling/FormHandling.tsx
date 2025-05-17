import { ChangeEvent, FormEvent, useState } from "react";
import FormRow from "./FormRow";
import FormInput from "./FormInput";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const initailValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
type Error = {
  name: string;
  message: string;
};
const FormHandling = () => {
  const [values, setValues] = useState<FormValues>(initailValues);
  const [error, setError] = useState<Error | null>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error && error.name === name) {
      setError(null);
    }
  }
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = values;

    if (!name) {
      setError({
        name: "name",
        message: "Name is required",
      });
      return;
    }
    if (name.length < 3) {
      setError({
        name: "name",
        message: "Name has to be more than 3 character.",
      });
      return;
    }
    if (!email) {
      setError({
        name: "email",
        message: "Email is required",
      });
      return;
    }
    if (!password) {
      setError({
        name: "password",
        message: "Password is required",
      });
      return;
    }
    if (confirmPassword != password) {
      setError({
        name: "confirmPassword",
        message: "Password does not match",
      });
      return;
    }
    console.log(values);
  }
  return (
    <form onSubmit={submitHandler}>
      <FormRow label="Name" name="name" error={error}>
        <FormInput
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
          error={error?.name === 'name'}
        />
      </FormRow>
      <FormRow label="Email" name="email" error={error}>
        <FormInput
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={error?.name === 'email'}
        />
      </FormRow>
      <FormRow label="password" name="password" error={error}>
        <FormInput
          id="pasword"
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={error?.name === 'password'}
        />
      </FormRow>
      <FormRow label="confirmPassword" name="confirmPassword" error={error}>
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          error={error?.name === 'confirmPassword'}
        />
      </FormRow>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormHandling;
