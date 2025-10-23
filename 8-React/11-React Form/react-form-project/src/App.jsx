import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";


function App() {

  const { register,
     handleSubmit,
      watch,
       formState: { errors, isSubmitting },
       } = useForm();

      //  function onSubmit(data) {
      // async mark to run await 
       async function onSubmit(data) {
        //API call ko simulate karte hain
        await new Promise((resolve) => setTimeout(resolve,5000));
        console.log("Submiting The Form",data);
       }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
        className={errors.firstName ? 'input-error':""}
        {...register('firstName',
        { required: true,
          minLength:{value:3, message:'Min Len atleasr 3'},
          maxLength:{value:6, message:'Max Len atmost 6'},
           })}/>
           {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name:</label>
        <input
        className={errors.firstName ? 'input-error':""}
        {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>Last Name:</label>
        <input
        className={errors.firstName ? 'input-error':""}
        {...register('lastName',{
           pattern: {
            value: /^[A-Za-z]+$/i,
          message: "Last Name is not as per the rules"
           }
         })}/>
         {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br/>
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
   
  )
}

export default App
