import React, { useState, useEffect } from 'react'
import "./Login.css";
import { Link } from "react-router-dom"
import { Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { useAlert } from "react-alert";
import { loginUser } from "../../Actions/User";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const alert = useAlert();
  // const { error } = useSelector((state) => state.user);
  // const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    
  };

  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     dispatch({ type: "clearErrors" });
  //   }
    // if (message) {
    //   // alert.success(message);
    //   dispatch({ type: "clearMessage" });
    // }
  

  return (
    <div className='login'>
      <form className='loginForm' onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social App
        </Typography>
        <input
          name='email'
          type='email'
          placeholder='Enter Your Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          name='password'
          type='password'
          placeholder='Enter Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>
        <Button type='submit'>Login</Button>
        <Link to="/register">
          <Typography>Don't Have an Account?</Typography>
        </Link>

      </form>
    </div>
  )
}

export default Login
