import React from 'react'
import './login.css'

const Login = ({setSwitchtoComp}) => {
  return (
  <div className="loginContainer">
     <div className='logWrapper'>
        <div className='title'>Sign in to your account</div>
        <div className='inputFields'>
           <div className='inputField'>
           <input placeholder='  UserName'  />
           </div>
            <div className='inputField'>
            <input placeholder='  Password' />
            </div>
            <div className="forgotContainer">
              <div>
                  <input type="checkbox" className='check' /> Remember me
              </div>
              <div className='forgotlink'>
              <span className='link' onClick={()=>setSwitchtoComp("forgot")}>Forgot Password?
              </span> 
              </div>
            </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Login</button>
        </div>
    </div>  
    <div className='text'>
           Don't have an account?<span className='link' onClick={()=>setSwitchtoComp("register")}>Create One</span>
        </div>
  </div> 
  )
}

export default Login