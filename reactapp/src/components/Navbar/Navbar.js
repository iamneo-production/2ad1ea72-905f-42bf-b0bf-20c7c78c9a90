import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
        <span className="logo">Socialogram</span>
        </div>
        <div className="navbarCenter">
            <div className="SearchBar">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search for friends,posts and videos" className="searchInput"
        
                />
            </div>
        </div>
        <div className="navbarRight">
           
        <img src="https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg" alt="" className="navbarImg" />
       </div>
    </div>
  )
}

export default Navbar;