import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Signup/Main";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer position='top-center'/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/about' element={<About/>}/>  */}
        <Route path="/login" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
