import React from 'react'
import './login.css'

const Login = ({setSwitchtoComp}) => {
  return (
    <div className='logWrapper'>
        <div className='title'>Sign in to your account</div>
        <div className='inputFields'>
           <div className='inputField'>
           <input placeholder='  UserName'  />
           </div>
            <div className='inputField'>
            <input placeholder='  Password' />
            </div>
            <div className='reset'>
             <span className='link' onClick={()=>setSwitchtoComp("reset")}>Forgot</span> Password?
        </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Login</button>
        </div>
        <div className='text'>
           Don't have an account? <span className='link' onClick={()=>setSwitchtoComp("register")}>Create here</span>
        </div>
    </div>   
    
  )
}

export default Login