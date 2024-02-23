import React from 'react'
import './register.css'
const Register = ({setSwitchtoComp}) => {
  return (
    <div className='regWrapper'>
        <div className='title'>Register</div>
        <div className='inputFields'>
           <div className='inputField'>
           <input placeholder='FirstName'  />
           </div>
            <div className='inputField'>
            <input placeholder='LastName' />
            </div>
            <div className='inputField'>
            <input placeholder='Email'  />
            </div>
           <div className='inputField'>
           <input placeholder='Password' />
           </div>
           <div className='inputField'>
           <input placeholder='Confirm Password' />
           </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Register</button>
        </div>
        <div className='text'>
           <span className='link' onClick={()=>setSwitchtoComp("login")}>Login</span> instead??
        </div>
    </div>
  )
}

export default Register