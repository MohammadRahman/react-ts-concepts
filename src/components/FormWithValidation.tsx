import React, { FormEvent, useState } from 'react'

export const FormWithValidation = () => {
    const [formValues, setValues] = useState({
        name: "",
        email: ""
    });
    const {name, email} = formValues;
    function submitHandler(e: FormEvent){
        e.preventDefault();

    }
  return (
    <div style={{padding:"5rem"}}>
        <form onSubmit={submitHandler}>
            <div style={{display:'flex', flexDirection: 'column', gap:'5px'}}>
                <label htmlFor="name">Name</label>
                <input style={{width: '150px', padding:"10px"}} type="text" name='name' value={name} placeholder="Name" onChange={(e)=> setValues(prev=> ({...prev, name: e.target.value}))}/>
            </div>
            <div style={{display:'flex', flexDirection: 'column', gap:'5px'}}>
                <label htmlFor="email">Email</label>
                <input style={{width: '150px', padding:"10px"}} type="email" name='Email' value={email} placeholder="Name"/>
            </div>
            <div style={{marginTop: "1rem"}}>
            <button style={{padding:'10px'}}>submit</button>
            </div>
           
        </form>
    </div>
  )
}
