import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useRef, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { menu } from "./SidebarConfig";
import "./Sidebar.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useSelector } from "react-redux";
import CreatePostModal from "../Post/Create/CreatePostModal";


const Sidebar = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Home");
  const excludedBoxRef = useRef(null);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((store) => store);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Profile") {
      navigate(`/${user.reqUser?.username}`);
    } else if (tab === "Home") {
      navigate("/");
    } else if (tab === "Create") {
      onOpen();
    } else if (tab === "Message") {
      navigate("/messages")
    }
    else if (tab === "Notification") {
      navigate("/notifications/")
    }

    if (tab === "Search") {
      setIsSearchBoxVisible(true);
    } else setIsSearchBoxVisible(false);
  };

  function handleClick() {
    setShowDropdown(!showDropdown);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  // useEffect(() => {
  //   window.addEventListener("click", handleClick);
  //   return () => window.removeEventListener("click", handleClick);
  // }, []);

  return (
    <div className=" sticky top-0 h-[100vh] pb-10 flex">
      <div className={`${activeTab === "Search" ? "px-3" : "px-10"} flex flex-col justify-between h-full`}>
        <div className="pt-10">
          {!isSearchBoxVisible && (
            <Link to="/">
              <img
                className="w-40"
                src="https://res.cloudinary.com/dybo4pw89/image/upload/v1689939537/logo_jcdwhq.jpg"
                alt=""
              />
            </Link>
          )}
          <div className="mt-10">
            {menu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={` ${activeTab === item.title ? "font-bold" : "font-semibold"
                    } ${isSearchBoxVisible ? "hidden" : "block"}`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div clasName="relative">
          <div onClick={handleClick} className="flex items-center cursor-pointer ">
            <IoReorderThreeOutline className="text-2xl" />
            {!isSearchBoxVisible && <p className="ml-5">More</p>}
          </div>
          <div className="absolute bottom-20 left-14  w-[70%]">
            {showDropdown && (
              <div className="shadow-md">
                {/* <p className=" w-full py-2 text-base px-4 border-t border-b  cursor-pointer">
                  Switch Appearance
                </p> */}
                {/* <p className=" w-full py-2 text-base px-4 border-t border-b cursor-pointer">
                  Saved
                </p> */}
                <p onClick={handleLogout} className=" w-full py-2 text-base px-4 border-t border-b cursor-pointer">
                  Log out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isSearchBoxVisible && (
        <div >

          <SearchComponent setIsSearchVisible={setIsSearchBoxVisible} />
        </div>
      )}

      <CreatePostModal onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
    </div>
  );
};
export default Sidebar