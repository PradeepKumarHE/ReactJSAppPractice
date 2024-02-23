import React from 'react'
import './reset.css'
const ResetPassword = ({setSwitchtoComp}) => {
  return (
    <div className='logWrapper'>
        <div className='title'>Reset Password</div>
        <div className='inputFields'>
           <div className='inputField'>
           <input placeholder='Password'  />
           </div>
            <div className='inputField'>
            <input placeholder='Confirm Password' />
            </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Reset</button>
        </div>
        <div className='text'>
          Go To <span className='link' onClick={()=>setSwitchtoComp("login")}>Login</span>
        </div>
    </div>
  )
}

export default ResetPassword