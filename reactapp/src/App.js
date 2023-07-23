<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Signup/Main";
import LandingPage from "./components/LandingPage/LandingPage";
import Setting from "./components/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer position='top-center'/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path='/about' element={<About/>}/>  */}
        <Route path="/login" element={<Main />} />
        <Route path="/setting" element={<Setting />} />
        
      </Routes>
    </BrowserRouter>
  );
=======
import Router from './Pages/Router/Router';

function App() {
  return (
    <div
  div className="App">
      <Router />
    </div>
  )
>>>>>>> 3fe6365e88d339e6d00f998dd84bc5a8a05911e3
}

export default App;
