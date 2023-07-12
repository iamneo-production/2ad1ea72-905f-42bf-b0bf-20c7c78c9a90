
import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from  '@mui/icons-material/Person';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import LogoutIcon from  '@mui/icons-material/Logout';
function sidebar() {
  return (
    <div className="sidebar">
    <ul className="sidebarList">
        <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>

        </li>
        <li className="sidebarListItem">
            <MessageIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>

        </li>
        <li className="sidebarListItem">
            <NotificationsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>

        </li>
        <li className="sidebarListItem">
            <AddCircleOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Create</span>

        </li>
        <li className="sidebarListItem">
            <PersonIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>

        </li>
        <li className="sidebarListItem">
         <SettingsSharpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>

        </li>
        <li className="sidebarListItem">
            <LogoutIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>

        </li>      
    </ul>
    </div>
  )
}

export default sidebar