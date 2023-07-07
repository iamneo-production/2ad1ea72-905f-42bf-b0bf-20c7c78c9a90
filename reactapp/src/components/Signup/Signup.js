import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [credential, setCredential] = useState({ userName: "", name: "", email: "", password: "", dobDate: "" });

    const signup = async (e) => {
        e.preventDefault();
        try {
            const { userName, name, email, password, dobDate } = credential;
            if (userName.trim() == '' || name.trim() == '' || email.trim() == '' || password.trim() == '' || dobDate.trim() == '') {
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
        <>
            <form onSubmit={signup} className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Username"
                        value={credential.userName}
                        name="userName"
                        onChange={onChange}
                        required autoComplete="off"
                    />
                </div>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={credential.name}
                        onChange={onChange}
                        required autoComplete="off"
                    />
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={credential.email}
                        onChange={onChange}
                        required autoComplete="off"
                        
                    />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={credential.password}
                        onChange={onChange}
                        required autoComplete="off"
                    />
                </div>
                <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input
                        type="date"
                        placeholder="Date Of Birth"
                        name="dobDate"
                        value={credential.dobDate}
                        onChange={onChange}
                        required autoComplete="off"
                    />
                </div>

                <input type="submit" className="btn" value="Sign up" />
                {/* <p className="social-text">Or Sign up with social platforms</p> */}
                {/* <div className="social-media">
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
                </div> */}
            </form>
            <ToastContainer />
        </>
    );
};

export default Signup;
