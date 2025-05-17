import { FormRowVertical } from './FormRowVertical'
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

export const Form = () => {
    const [extraVal] = useState("extraValue")
    const postUser= {};
    const { values, errors, onChangeHandler, handleSubmit } = useForm({
        email: "",
        password: "",
        userName: "",
        extraVal
      }, postUser);

  return (
    <div style={{width:"200px"}}>
    <form onSubmit={handleSubmit}>
        <div style={{display: "flex", flexDirection:'column', gap:"1rem"}}>
        <FormRowVertical label="User Name" errors={errors.userName?.message}>
            <input style={{padding:'8px'}} name='userName' value={values.userName} type="text" id='userName' placeholder='user name' onChange={onChangeHandler}/>
        </FormRowVertical>
        <FormRowVertical label="Email" errors={errors.email?.message}>
            <input style={{padding:'8px'}} name='email' value={values.email} type="email" id='email' placeholder='Email' onChange={onChangeHandler}/>
        </FormRowVertical>
        <FormRowVertical label="Password" errors={errors.password?.message}>
            <input style={{padding:'8px'}} name='password' value={values.password} type="password" onChange={onChangeHandler} id='password' placeholder='Password'/>
        </FormRowVertical>
        <button>submit</button>
        </div>
    </form>
    </div>
  )
}
