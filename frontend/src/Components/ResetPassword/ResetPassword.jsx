import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
import { Button,Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { resetPassword } from '../../Actions/User'
const ResetPassword = () => {
    const params = useParams();
    const dispatch=useDispatch();
    const alert = useAlert();
    const {error,message,loading} =useSelector((state)=>state.like);
    const [newPassword,setNewPassword] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(resetPassword(params.token,newPassword))
    }
    useEffect(() => {
      if(error){
        alert.error(error)
        dispatch({type:"clearErrors"})
      }
      if(message){
        alert.success(message)
        dispatch({type:"clearMessage"})
      }
    }, [dispatch,error,alert,message])
    
    return (
        <div className='resetPassword'>
            <form className='resetPasswordForm' onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                    Social Aap
                </Typography>
                <input
                    type='password'
                    placeholder='Enter New Password'
                    className='updatePasswordInputs'
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                ></input>
                <Link to="/">
                    <Typography>Login</Typography>
                </Link>
                <Typography>Or</Typography>
                <Link to="/forgot/password">
                    <Typography>Request Another Token!</Typography>
                </Link>
                <Button disabled = {loading} type="submit">Reset Password</Button>
            </form>
        </div>
    )
}

export default ResetPassword
