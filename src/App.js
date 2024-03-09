import "./App.css"
import { useState } from "react";
import Register from "./components/Registration/register";
import Login from "./components/Login/login"
import ResetPassword from "./components/ResetPassword/resetpaswd";
import UserVerification from "./components/UserVerification/userverification";

function App() {
  const [dispalyComp,setSwitchtoComp]=useState("login");

  
  return (
    <div className="appWrapper">
      {
        dispalyComp==="register"?
        <Register {...{setSwitchtoComp}} />
        :
        dispalyComp==="login"?<Login {...{setSwitchtoComp}}/>:
        dispalyComp==="forgot"?<UserVerification {...{setSwitchtoComp}}/>:
        <ResetPassword {...{setSwitchtoComp}} />
      }
    </div>
  );
}

export default App;
