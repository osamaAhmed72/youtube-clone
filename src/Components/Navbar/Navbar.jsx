import React, { useState } from "react";
import "./Navbar.css";
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import jack from '../../assets/jack.png'
import { Link } from "react-router-dom";




const Navbar = ({setSidebar, setSearchQuery}) => {

    const [tempQuery, setTempQuery] = useState("");

    const handleSearch = () => {
        setSearchQuery(tempQuery);
    };
    return (
        <nav className="flex-div">
            <div className="navLeft flex-div">
                <img className="menuIcon" onClick={()=>setSidebar(prev=>prev===false? true:false)} src={menu} alt="menu icon" />
                <Link to={`/`}><img className="logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="navMid flex-div">
                <div className="searchBox flex-div">
                    <input type="text" placeholder="search" onChange={(e) => setTempQuery(e.target.value)}
                        value={tempQuery} onKeyDown={(e) => {if (e.key === "Enter") handleSearch(); }}/>
                    <Link to={`/`}><img src={searchIcon} alt="" onClick={handleSearch}/></Link>
                </div>
            </div>
            <div className="navRight flex-div">
                <img src={upload} alt="upload icon" />
                <img src={more} alt="more icon" />
                <img src={notification} alt="notification icon" />
                <img className="userIcon" src={jack} alt="profile pic" />
            </div>
        </nav>
    );
};

export default Navbar;
