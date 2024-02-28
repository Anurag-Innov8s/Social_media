import { Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Actions/User';
import { useAlert } from 'react-alert';
import './ForgotPassword.css'
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const[email,setEmail] =useState("");
  const {error,loading,message} = useSelector((state)=>state.like)  

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  useEffect(()=>{
    if(error){
        alert.error(error)
        dispatch({type:"clearErrors"})
    }
    if(message){
        alert.success(message)
        dispatch({type:"clearMessage"})
    }
  },[dispatch,error,alert,message])
  return (
    <div className='forgotPassword'>
        <form className='forgotPasswordForm' onSubmit={submitHandler}>
            <Typography variant='h3' style={{padding:"2vmax"}}>
                Soci-O-rbit
            </Typography>

            <input
                type='email'
                placeholder='Email'
                required
                className='forgotPasswordInputs'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <Button disabled={loading} type='submit'>Send Token</Button>
        </form>
      
    </div>
  )
}

export default ForgotPassword
