import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='authpage'>
        <Navbar />
        <div className='authcont'>

              <form className='authform'>
                  <h1>Login</h1>
                  <div className='formgroup'>
                      <label htmlFor='email'>Email</label>
                      <input type='email' id='email' />
                  </div>

                  <div className='formgroup'>
                      <label htmlFor='password'>Password</label>
                      <input type='password' id='password' />
                  </div>

                  <Link to='/forgotpassword'>
                      <p>Forgot Password</p>
                  </Link>
                  <Link to='/'>
                       <button className='btn'>Login</button>
                  </Link>
                  <h2 className='or'>OR</h2>
                  <Link to='/signup'>
                        <button className='btn'>Signup</button>
                  </Link>
                  
              </form>
        </div>
    </div>
  )
}

export default Login