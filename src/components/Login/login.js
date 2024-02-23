import React from 'react'
import './login.css'

const Login = ({setSwitchtoComp}) => {
  return (
    <div className='logWrapper'>
        <div className='title'>Login</div>
        <div className='inputFields'>
           <div className='inputField'>
           <input placeholder='UserName'  />
           </div>
            <div className='inputField'>
            <input placeholder='Password' />
            </div>
            <div className='reset'>
           <span className='link' onClick={()=>setSwitchtoComp("reset")}>Reset</span> Password?
        </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Login</button>
        </div>
        <div className='text'>
           <span className='link' onClick={()=>setSwitchtoComp("register")}>Register</span> instead??
        </div>
    </div>
  )
}

export default Login