import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/LoginScreen.css"
import user from "../assets/user.png"

const LoginScreen = () => {

  const { register, handleSubmit, reset } = useForm()
  const [isLogged, setIsLogged] = useState(false)
  const defaultValues = {
    email: "",
    password: ""
  }

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.data.token)
        setIsLogged(true)
      })
      .catch(err => console.log(err))
    reset(defaultValues)

  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true)
    }
    setIsLogged(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLogged(false)
  }

  if (isLogged) {
    return (
      <div>
        <h2>User Logged</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <div className='limiter' onSubmit={handleSubmit(submit)} >
      <div className='container-login100'>
        <div className='wrap-login100'>
          <div className='login100-pic'>
            <img src={user} alt="" />
          </div>
          <form className='login100-form validate-form'>
            <span className='login100-form-title'>Member Login</span>
            <div className='wrap-input100 validate-input'>
              <input className='input100' {...register("email")} type="email" id='email' placeholder="Email" />
              <span className='focus-input100'></span>
              <span className='symbol-input100'>
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>
            <div className='wrap-input100 validate-input'>
              <input className='input100' {...register("password")} type="password" id='password' placeholder="Password" />
              <span className='focus-input100'></span>
              <span className='symbol-input100'>
                <i class="fa-solid fa-lock"></i>
              </span>
            </div>
            <div className='container-login100-form-btn'>
              <button className='login100-form-btn'>Login</button>
            </div>
            <div className='text-center p-t-12'>
              <span className='txt1'>Forgot</span>
              <a className='txt2' href="#">Username / Password?</a>
            </div>
            <div className='text-center p-t-136'>
              <a className='txt2' href="#">Create your Account</a>
              <i className="fa fa-solid fa-arrow-right"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen