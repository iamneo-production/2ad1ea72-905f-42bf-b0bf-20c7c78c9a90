import React, { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { doLoggedIn } from '../auth/authenticate';
import { toast } from "react-toastify"
import { getCurrentUserDetail } from '../auth/authenticate';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    if(username.trim() == '' || password.trim() == ''){
      toast.error('Fill all credentials');
      return;
    }
    try {
      const response = await fetch("https://ide-caafafebfadfbeacafdccaeaeaadbdbabf.project.examly.io/proxy/8080/api/authenticate", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json();
      // console.log(data.user);
      console.log(getCurrentUserDetail())

      if(data.success === false){
        toast.error("Invalid Credentials");
      }
      else{
        toast.success("Successfully Logged In");
        doLoggedIn(data,()=>{
          console.log("login details saved to localStorage");
          navigate("/");
        })
      }

      

    } catch(error){

    }
  }

  

 


  return (
    <div className='bodyy'>
      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

        <div className="signin">

          <div className="content">

            <h2>Sign In</h2>

            <div className="form">

              <div className="inputBox">

                <input type="text" name='username' onChange={(e) => setUsername(e.target.value)} required /> <i>Username</i>

              </div>

              <div className="inputBox">

                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} required /> <i>Password</i>

              </div>

              <div className="links"> <NavLink to="/signup">Forgot Password</NavLink> <NavLink to="/signup">Signup</NavLink>

              </div>

              <div className="inputBox">

                <input type="submit" onClick={onClick} value="Login" />

              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Login
