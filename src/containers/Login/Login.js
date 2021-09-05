import React from 'react';
import "./Login.css";
import myVideo from '../.././images/india.mp4';
import service from '../Service/Service';
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/service");
  }
  return(
   <div>
   <video controls autoPlay loop muted style={{
          width:"100%",
          left:"50%",
          top:"400",
          bottom:"800",
          objectFit:"cover",
          transform:"translate(-50%,-50%)",
          zIndex:"-1",
          position: "fixed",
          width: "500",
          height: "100%",
          backgroundSize: "cover"}}>
          <source src={myVideo} type="video/mp4"></source>
        </video>
     <div class="vid-container">
    <div class="inner-container">
      <div class="box">
        <h1>Login</h1>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button onClick={handleRoute}>Login</button>
        <p>Not a member? <span>Sign Up</span></p>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Login;