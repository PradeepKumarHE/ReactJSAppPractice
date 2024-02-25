import React from 'react'
import './register.css'
const Register = ({setSwitchtoComp}) => {
  return (
    <div className='regWrapper'>
        <div className='title'>Sign up to Our App</div>
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
           
            <div className="inputField">
          <input placeholder="Country" />
        </div>
        <div className="inputField">
          <input placeholder="Phone number" />
        </div>

        <div className="inputField">
          <input placeholder="Company Name" />
        </div>
        <div className="inputField">
          <input placeholder="Company Type" />
        </div>

        <div className="inputField">
          <input placeholder="Website" />
        </div>
        <div className="inputField">
          <input placeholder="Number of employees" />
        </div>

        <div className="inputField">
          <input placeholder="Country" />
        </div>
        <div className="inputField">
          <input placeholder="State" />
        </div>
        <div className="inputField">
          <input placeholder="City" />
        </div>
        <div className="inputField">
          <input placeholder="Zipcode" />
        </div>
        <div className="inputField">
          <input placeholder="Street" />
        </div>
        

        <div className="inputField">
          <input placeholder="Country" />
        </div>
        <div className="inputField">
          <input placeholder="Phone" />
        </div>
        <div className="inputField">
          <input placeholder="Extension" />
        </div>
        </div>
        <div className='actionBtn'>
            <button className='btn'>Register</button>
        </div>
        <div className='text'>
           <span className='link' onClick={()=>setSwitchtoComp("login")}>Login</span>
        </div>
    </div>
  )
}

export default Register