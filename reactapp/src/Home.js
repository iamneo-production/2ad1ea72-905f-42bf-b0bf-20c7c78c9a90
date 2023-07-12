import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from './components/Rightbar/Rightbar';

import "./Home.css";
function Home () {
  return (
    <div className="home">
        <Navbar />
    <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar/>
            
    </div>
    </div>
  )
}

export default Home ;
