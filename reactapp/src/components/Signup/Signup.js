import React, { useState } from 'react'
import './Signup.css'
import { toast } from "react-toastify"

const Signup = () => {
  const [credential, setCredential] = useState({ userName: "", name: "", email: "", password: "", dobDate: "" });
  
  const signup = async (e) => {
    e.preventDefault();
    try {
      const { userName, name, email, password, dobDate } = credential;
      if (userName.trim()=='' || name.trim()=='' || email.trim()=='' || password.trim()=='' || dobDate.trim()=='') {
        toast.error("Please fill in all the required fields");
        return;
      }
      const res = await fetch("https://8080-caafafebfadfbeacafdccaeaeaadbdbabf.project.examly.io/api/register", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, name, email, password, dobDate })
      })
      const data = await res.text();
      if (data !== "Email already exists") {
        toast.success("Successfully Signed Up");
        setCredential({ userName: "", name: "", email: "", password: "", dobDate: "" });
      } else {
        toast.error("Email already exists");
      }
      



    } catch (error) {
      toast.error(error.message);
    }
  }

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  return (

    <div className='bodyy'>
      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

        <div className="signin">

          <div className="content">

            <h2>Sign Up</h2>

            <div className="form">

              <div className="inputBox">

                <input type="text" value={credential.userName} className="box2" name='userName' onChange={onChange} required={true} /> <i>Username</i>

              </div>

              <div className="inputBox">

                <input type="text" value={credential.name} className="box2" name='name' onChange={onChange} required /> <i>Name</i>

              </div>

              <div className="inputBox">

                <input type="email" value={credential.email} className="box2" name='email' onChange={onChange} required /> <i>Email</i>

              </div>

              <div className="inputBox">

                <input type="password" value={credential.password} className="box2" name='password' onChange={onChange} required /> <i>Password</i>

              </div>

              <div className="inputBox">

                <input type="Date" value={credential.dobDate} placeholder="" className="box2" name='dobDate' onChange={onChange} required /> <i>Date Of Birth</i>

              </div>

              <div className="inputBox">

                <input type="submit" onClick={signup} value="Sign Up" />

              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Signup
