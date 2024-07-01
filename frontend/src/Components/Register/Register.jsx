import React, { useState, useEffect } from 'react'
import './Register.css'
import { Avatar, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { registerUser } from '../../Actions/User'
const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const alert = useAlert();
    const {loading,error} = useSelector((state)=>state.user)
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatar(Reader.result)
            }
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(registerUser(name,email,password,avatar))
    }
    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:"clearErrors"})
        }
    },[dispatch,error,alert])

    return (
        <div className='register'>
            <form className='registerForm' onSubmit={submitHandler}>
                <Typography variant='h3' style={{ padding: "2vmax" }}>Soci-O-rbit</Typography>

                <Avatar src={avatar} alt='User' sx={{ height: "10vmax", width: "10vmax" }}></Avatar>

                <input type='file' accept='image/*' onChange={handleImageChange} required></input>

                <input
                    type='text'
                    className='registerInputs'
                    value={name}
                    onChange={(e) => setName(e.target.value)} placeholder='Enter your Name'
                    required
                ></input>
                <input
                    type='email'
                    className='registerInputs'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                    required>

                </input>

                <input
                    type="password"
                    className="registerInputs"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link to="/">
                    <Typography>Already Signed Up? Login here</Typography>
                </Link>
                <Button disabled={loading} type='submit'>
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default Register
