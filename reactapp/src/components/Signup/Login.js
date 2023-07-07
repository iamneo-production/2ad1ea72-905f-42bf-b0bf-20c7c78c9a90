import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUserDetail, doLoggedIn } from '../auth/authenticate';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() == '' || password.trim() == '') {
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
            console.log(getCurrentUserDetail())

            if (data.success === false) {
                toast.error("Invalid Credentials");
            }
            else {
                toast.success("Successfully Logged In");
                doLoggedIn(data, () => {
                    console.log("login details saved to localStorage");
                    navigate("/");
                })
            }



        } catch (error) {

        }
    }

        return (
            <>
                <form onSubmit={onSubmit} className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <input type="submit" value="Login" className="btn solid" />
                    <p
                        style={{
                            cursor: "pointer",
                            fontSize: "12px",
                        }}
                        // onClick={ForgetPassword}
                    >
                        <u>Forgot Password</u>
                    </p>
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        <button className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </button>
                        <button className="social-icon">
                            <i className="fab fa-google"></i>
                        </button>
                        <button className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </button>
                    </div>
                </form>
                
                {/* <ForgetPassword /> */}
            </>
        );
    };

    export default Login;
