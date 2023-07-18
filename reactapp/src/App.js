import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Signup/Main";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfilePage from './components/ProfilePage/ProfilePage';
import FollowersPage from './components/ProfilePage/FollowersPage';
import FollowingPage from './components/ProfilePage/FollowingPage';
import PostPage from './components/ProfilePage/PostPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer position='top-center'/> */}
      <Routes>
      <Route path="/" element={<LandingPage />} />
        {/* <Route path='/about' element={<About/>}/>  */}
        <Route path="/login" element={<Main />} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />   
        <Route path="/followers" element={<FollowersPage />} />      
        <Route path="/following" element={<FollowingPage/>}></Route>
        <Route path="/post" element={<PostPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
