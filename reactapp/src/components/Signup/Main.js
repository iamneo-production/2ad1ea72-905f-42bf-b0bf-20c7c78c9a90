import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login"
import Panel from "./Panel";
import "./Main.css";

const Main = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login />
          <Signup />
        </div>
        <Panel
          handleSignUpClick={handleSignUpClick}
          handleSignInClick={handleSignInClick}
        />
      </div>
    </div>
  );
};

export default Main;