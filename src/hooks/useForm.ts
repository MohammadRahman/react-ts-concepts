/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useReducer } from "react";
import { formReducer, FormState } from "../reducers/Form.reducer";


export function useForm(initialValues: FormState, apiFunction: (data: FormState) => Promise<any>) {
  const [state, dispatch] = useReducer(formReducer, {values: initialValues, errors: {}})

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_VALUE", field: e.target.name, value: e.target.value });
  };

  const validate = () => {
    let isValid = true;

    Object.keys(state.values).forEach((field) => {
      if (!state.values[field]) {
        dispatch({ type: "SET_ERROR", field, message: `${field} is required.` });
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ERRORS" });

    if (!validate()) return;

   apiFunction(state.values);
  };
  return {
    values: state.values,
    errors: state.errors,
    onChangeHandler,
    handleSubmit,
  };
}
