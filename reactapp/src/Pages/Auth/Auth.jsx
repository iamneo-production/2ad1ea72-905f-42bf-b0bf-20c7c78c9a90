import React from "react";
import { useLocation } from "react-router-dom";
import Signin from "../../Components/Register/Signin";
import Signup from "../../Components/Register/Signup";
import "./Auth.css"

const Auth = () => {
    const location = useLocation();
    return (
        <div>

            <div class="flex items-center justify-center h-[100vh]">
                <div className="relative mr-10 hidden lg:block">
                    <div className=" h-[35.3rem] w-[20rem]">
                        <img
                            className="h-full w-full"
                            src="https://res.cloudinary.com/dybo4pw89/image/upload/v1690398760/iphone-160307_1280_q4bs66.png"
                            alt="SocioGram Homepage"
                        />
                        <di className="mobileWallpaper rounded-2xl absolute top-8 h-[30rem] w-[17rem] w- right-3">
                        </di>

                    </div>

                </div>

                <div className="form md:w-[35vw] lg:w-[22vw]">

                    {location.pathname === "/login" ? <Signin /> : <Signup />}

                </div>
            </div>
        </div>

    );
};

export default Auth;

// https://res.cloudinary.com/dnbw04gbs/image/upload/v1679490221/screenshot4_hb7xtr.png
//
//
// 