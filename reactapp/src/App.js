import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Signup/Main";
import LandingPage from "./components/LandingPage/LandingPage";
import Editprofile from "./components/EditProfile/Editprofile";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer position='top-center'/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path='/about' element={<About/>}/>  */}
        <Route path="/login" element={<Main />} />
        <Route path="/editprofile" element={<Editprofile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
