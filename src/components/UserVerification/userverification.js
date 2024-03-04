import React from "react";
import "./userverification.css";

const UserVerification = ({ setSwitchtoComp }) => {
  return (
    <div className="logWrapper">
      <div className="title">Verify your account</div>
      <div className="inputFields">
        <div className="inputField">
          <input placeholder="  Email or Phone" />
        </div>       
      </div>
      <div className="actionBtn">
        <button className="btn">Verify</button>
      </div>     
    </div>
  );
};

export default UserVerification;
