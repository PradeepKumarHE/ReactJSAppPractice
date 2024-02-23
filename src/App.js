import Register from "./components/Registration/register";
import "./App.css"
import { useState } from "react";
import Login from "./components/Login/login"
import ResetPassword from "./components/ResetPassword/resetpaswd";

function App() {
  const [dispalyComp,setSwitchtoComp]=useState("register");

  
  return (
    <div className="appWrapper">
      {
        dispalyComp==="register"?
        <Register {...{setSwitchtoComp}} />
        :
        dispalyComp==="login"?<Login {...{setSwitchtoComp}}/>:
        <ResetPassword {...{setSwitchtoComp}}/>
      }
    </div>
  );
}

export default App;
