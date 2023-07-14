import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Signup/Main";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/settings";
function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer position='top-center'/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path='/about' element={<About/>}/>  */}
        <Route path="/login" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
